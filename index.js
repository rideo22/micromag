var ip = require("ip");
console.dir ( ip.address() );

const PORT = process.env.PORT || 8080;

var http = require("http");
var server = http.createServer();
server.listen(PORT);
