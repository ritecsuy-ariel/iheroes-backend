import { io } from 'socket.io-client'

import app from './app'
import { IOccurrence } from './interfaces/occurrence'
import { env } from './env'

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`\x1b[32mApp is running on port: ${port} 🚀\x1b[37m`)
})

const socket = io('https://zrp-challenges-dev-production.up.railway.app/')

socket.on('occurrence', async (data: IOccurrence) => {
    console.log('\x1b[36mNova ameaça encontrada!.\x1b[37m')
    await fetch('http://localhost:3333/occurrence', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: env.APP_TOKEN,
        },
        body: JSON.stringify(data),
    })
})

socket.on('disconnect', (reason) => {
    console.log('Socket is disconnected due: ', reason)
})
