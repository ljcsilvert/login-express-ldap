import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import apiLogin from '../apiLogin.js'
import validateIncomingData from '../utils/validateIncomingData.js'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//* Application routing
app.get('/', (req, res) => res.json('🦧'))
app.use('/api/login', validateIncomingData, apiLogin)
app.use('*', (req, res) => res.status(404).json({ error: 'Not found 🤯' }))

export default app
