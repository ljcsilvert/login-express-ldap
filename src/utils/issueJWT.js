import jwt from 'jsonwebtoken'
import fs from 'fs'
import { JWT_PRIV_KEY_PATH } from '../config/dotenv.js'

const JWT_PRIV_KEY = fs.readFileSync(JWT_PRIV_KEY_PATH, 'utf-8')

/**
 ** Generate a JWT for a user
 * @param {Object} user
 * @returns a signed JWT
 */
function issueJWT(user) {
  const expiresIn = 2592000 //* one month
  const payload = {
    sub: user,
    iat: Math.floor(Date.now() / 1000),
  }

  return jwt.sign(payload, JWT_PRIV_KEY, { expiresIn, algorithm: 'RS256' })
}

export default issueJWT
