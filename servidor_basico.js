"use strict";

var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200,{ "content-Type" : "text/plain" });

	response.end("Hola node\n");
});
server.listen(1333,"127.0.0.1");
console.log("servidor arrancado en http://127.0.0.1");