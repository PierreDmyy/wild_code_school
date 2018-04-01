const http = require ('http')

const server = http.createServer ((request, response) => {
    response.writeHead (200)
    response.end ('Bienvenue!')
})

server.listen (3000)
console.log ('Adresse su serveur: http://localhost:3000 ')