var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
 
http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type':'text/plain'})
 res.end('Hola, soy fede\n');

}).listen(1337, 'localhost');
