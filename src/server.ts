import { io } from 'socket.io-client'

import app from './app'
import { IOccurrence } from './interfaces/occurrence'

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`\x1b[32mApp is running on port: ${port} 🚀`)
})

const socket = io('https://zrp-challenges-dev-production.up.railway.app/')

socket.on('occurrence', async (data: IOccurrence) => {
    await fetch('http://localhost:3333/occurrence', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
})

socket.on('disconnect', (reason) => {
    console.log('Socket is disconnected due: ', reason)
})
