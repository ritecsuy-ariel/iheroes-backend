import app from './app'

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`\x1b[32mApp is running on port: ${port} 🚀`)
})
