const PORT = process.env.PORT || 8080;

const hapi = require('hapi')

const server = new hapi.Server()

// Tell our app to listen on port 3000
server.connection({ port: PORT })

// Create the POST route to /sms
server.route({
  method: 'POST',
  path: '/',
  handler: function (request, reply) {
    const body = request.payload.Body
    const response = reply(`You sent: ${body} to Hapi`)
    response.header('Content-Type', 'text/plain')
  }
})

server.start(function (err) {
  if (err) {
    throw err
  }
})
