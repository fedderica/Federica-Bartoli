// const bodyParser = require("body-parser");
const express = require("express");
const { rmSync } = require("fs");
const { post } = require("request");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();

// to enable parsing of json bodies for post requests
 server.use(express.json());
 let id = 1;

// TODO: your code to handle requests
server.post("/posts", (req, res) => { //si tengo un error
    const {author, title, contents }= req.body;
    if (!author|| !title || !contents) {
       return res.status(STATUS_USER_ERROR).json({
        error: "No se recibieron los parámetros necesarios para crear el Post",
       });
    } //si no tengo un error
     const newPost = {id:id++, author, title, contents, };
     posts.push(newPost);
     res.status(200).json(newPost);
    });
    server.post("/posts/author/:author", (req, res) => {
        const {title, contents} = req.body;
        const {author} = req.params;
    });
    server.get("/posts?", (req, res) =>{
    const {term} = req.query;
    if(term){
     const result = posts.filter((post) => {
        return post.title.includes(term) || post.contents.includes(term);
     });
     server.status(200).json(result);

     }else{
        res.status(200).json(posts);
     }
     });
    
    // si tengo term => voy a buscar
    // si no tengo term => voy a mandar todo 

    server.get("/posts/:author", (req, res) => {
        const {author} = req.params;
        const result = posts.filter((posts) => {
            return post.author === author;
        });
        if(result.length){
            //tengo posts // encontre los posts
            res.status(200).json(result);
        
        } else {
                //no tengo posts //no encontre los posts
                res
                .status(STATUS_USER_ERROR)
                .json({error: "No existe ningun post del autor indicado"})


            }
            server.put("/posts", (req, res) => {
                const {id, title, contents } = req.body;
                if (!id || !title || !contents) res.status(STATUS_USER_ERROR).json({eror: "no se recibieron los parametros necesarios para modificar el Post"})
            });
    
    });
    server.get("/posts/:author/:title", (req, res) => {
        const {author, title} = req.params;

        const result = posts.filter((post) => {
            return post.author === author && post.title === title;
        });
        const post = posts.find((post) => post.id === parseInt(id));
        if(post){
         //encontré post con ese ID
         post.title= title;
         post.contents = contents;
         res.status(200).json(post);
        }else {
//no encontré ningun post con ese ID
res.status(STATUS_USER_ERROR)
.json({
    error:
    "No existe el post con ese ID",
});
        }
  });
;
server.delete("/posts", (req, res) => {
    const { id } = req.body;
    const post = posts.find((post) => post.id === parseInt (id));

    if (!id || !post)
     res.status(STATUS_USER_ERROR).json({
        error: "Mensaje de error"});
         posts = posts.filter(post => post.id !== id);
     res.status(200).json({success: true });

     });
     server.delete("/author", (req, res) => {
        const {author} = req.body;
         const authorPosts = posts.filter(post => post.author === author);
           if (!author || !authorPosts.length)
           res.status(STATUS_USER_ERROR).json({ error: "Mensaje de error"});
           posts = posts.filter((post) => post.author !== author);
           res.status(200).json(authorPosts);
     });

module.exports = { posts, server };
// formas de mandar info a la request
//1 - body
// 2 params (url.. es la url/users/id)
//3 )query URL.. /users?name = jorge 
//diferentes rutas
//users
//users/1
// la misma ruta
//users=> si no tengo query quiero que me traigas todos los usuarios
// users?name=jorge => si t engo query quiero qeue me traigas todos los usuarios de name JOrg