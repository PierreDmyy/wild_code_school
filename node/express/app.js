const express = require ("express")

const app = express()
const server = app.listen (3000,"127.0.0.1", () => {
    const host = server.address().address
    const port = server.address().port
    console.log (`L'adresse est: http://${host}:${port}`)

})