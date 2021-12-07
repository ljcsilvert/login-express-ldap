import dotenv from 'dotenv-safe'

dotenv.config()

export const NODE_ENV = process.env.NODE_ENV
export const APP_PORT = NODE_ENV === 'development' ? 9201 : 9200

export const DATABASE_NAME = process.env.DATABASE_NAME
export const DATABASE_URL = process.env.DATABASE_URL
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
export const DATABASE_LOGS = process.env.DATABASE_LOGS === 'true'

export const URLS_LDAP = [process.env.LDAP_URL_1, process.env.LDAP_URL_2]

export const JWT_PRIV_KEY_PATH = process.env.JWT_PRIV_KEY_PATH
export const JWT_PUB_KEY_PATH = process.env.JWT_PUB_KEY_PATH

export const PASSWORD_PRIV_KEY_PATH = process.env.PASSWORD_PRIV_KEY_PATH
export const PASSWORD_PUB_KEY_PATH = process.env.PASSWORD_PUB_KEY_PATH
