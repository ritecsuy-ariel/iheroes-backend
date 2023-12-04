import express from 'express'
import 'reflect-metadata'
import cors, { CorsOptions } from 'cors'

import { router } from './routes'
import { auth } from './middlewares/auth'

const app = express()

const corsOptions = {
    oigin: '*',
} as CorsOptions

app.use(cors(corsOptions))
app.use(express.json())

app.get('/healthCheck', (req, res) => {
    res.send({ message: 'Hello World' })
})

// app.use(auth)
app.use(router)

export default app
