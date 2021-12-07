import { Sequelize } from 'sequelize'
import { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_URL, DATABASE_LOGS } from './dotenv.js'

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  url: DATABASE_URL,
  dialect: 'mysql',
  logging: DATABASE_LOGS,
})

export default sequelize
