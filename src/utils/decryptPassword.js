import fs from 'fs'
import crypto from 'crypto'
import { PASSWORD_PRIV_KEY_PATH } from '../config/dotenv.js'

/**
 ** Decrypt a password encrypted with a pub key.
 * @param {String} password encrypted
 * @returns \{ decryptedPassword, error }
 */
function decryptPassword(password) {
  try {
    const buff = Buffer.from(password, 'utf8')
    const passwordPrivateKey = fs.readFileSync(PASSWORD_PRIV_KEY_PATH, 'utf8')
    const decryptedPassword = crypto.privateDecrypt(passwordPrivateKey, buff).toString()
    return { decryptedPassword }
  } catch (error) {
    console.error(error)
    return { error }
  }
}

export default decryptPassword
