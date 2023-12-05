import express from 'express'
import cors, { CorsOptions } from 'cors'

import { router } from './routes'
import { database } from './database'

database.connect()

const app = express()

const corsOptions = {
    origin: '*',
} as CorsOptions

app.use(cors(corsOptions))
app.use(express.json())

app.get('/healthCheck', (req, res) => {
    res.send({ message: 'Hello World' })
})

app.use(router)

export default app
