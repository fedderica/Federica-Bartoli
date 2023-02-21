var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
 
http.
createServer((req, rest) => {
    const name = req.url.slice(1);
    console.log(name);
    const files = fs.readdirSync("./images");
    console.log(files);

    for (const file of files) {
     if (file.includes('${name}_doge.jpg)) {
res.writeHead(200, {"Content-type": "image/jpg"});

res.end(´./images/${name}_doge.jpg´);
        }
}
})
    
//res.writeHead(200, { 'Content-Type':'text/plain'})
//res.end('Hola soy la pag de fede');
.listen(3002, 'localhost'); // aca pongo a escuchar mi servidor 


