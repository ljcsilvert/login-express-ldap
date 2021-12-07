import app from './config/app.js'
import sequelize from './config/sequelize.js'
import { APP_PORT } from './config/dotenv.js'

async function main() {
  try {
    await sequelize.authenticate()
    console.log('Connected to MySQL database.')

    app.listen(APP_PORT, '0.0.0.0', () => console.log(`Listening on port ${APP_PORT}...`))
  } catch (error) {
    console.error(error)
  }
}

main()
