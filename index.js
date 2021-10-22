var ip = require("ip");
console.dir ( ip.address() );

var http = require("http");
var server = http.createServer();
server.listen(80);
