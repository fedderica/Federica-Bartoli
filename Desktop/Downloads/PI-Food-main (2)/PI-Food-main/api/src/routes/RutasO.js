const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/recipes/:idRecipe", (req, res) => {
    res.send("NIY: está ruta trae la info de todos los usuarios");
});

usersRouter.get("/recipes/name?=", (req, res) => {
    res.send("NIY: ESTÁ RUTA TRAE LA INFO DE UN USUARIO DETERMINADO POR ID");
})

usersRouter.get("diets", (req, res) => {
    res.send("NIY: ESTÁ RUTA TRAE LA INFO DE UN USUARIO DETERMINADO POR ID");
})

usersRouter.post("/recipes", (req, res) => {
    res.send("NIY: ESTÁ RUTA TRAE LA INFO DE UN USUARIO DETERMINADO POR ID");
})

usersRouter.ge