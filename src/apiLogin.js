import decryptPassword from './utils/decryptPassword.js'
import parseUser from './utils/parseUser.js'
import issueJWT from './utils/issueJWT.js'
import { URLS_LDAP } from './config/dotenv.js'
import connectToLdap from './utils/connectToLdap.js'
import * as dao from './dao'

async function apiLogin(req, res, next) {
  try {
    const username = req.username
    const password = req.password

    const { decryptedPassword, error: decryptError } = decryptPassword(password)
    if (decryptError) return res.status(400).json({ error: 'Unable to decrypt password.' })

    //* Try to connect to multiple LDAP with the same email and password.
    let isLogin = false
    // myArray.some() doesnt work with async/await and promises 🦧
    for (const url of URLS_LDAP) {
      const isConnectToLdap = await connectToLdap(url, { username, decryptedPassword })
      if (isConnectToLdap) {
        isLogin = true
        break
      }
    }
    if (!isLogin) return res.status(401).json({ error: 'Incorrect username or password.' })

    //* Retrieve user data, parse it and issue a JWT.
    const userData = await dao.getUserByEmail(username) // TODO: What if a user doesnt exist in db?
    const roles = await dao.getRolesByUserId(userData.id) // TODO: What if a user doesnt have any role?
    const user = parseUser(userData, roles)
    const jwt = issueJWT(user)

    return res.status(200).json({ token: jwt })
  } catch (error) {
    // TODO: I should handle errors.
    console.error(error)
  }
}

export default apiLogin
