const comicsRouter = require("express").Router();
const { getComicById, getComicByCategory, getComics, updateComics, deleteComics, postComics, getComicsByPrice } = require("../controllers/comics");

comicsRouter.get("/precio/:precio", getComicsByPrice);
comicsRouter.get("/categoria/:categoria", getComicByCategory);
comicsRouter.get("/:id", getComicById);
comicsRouter.get("/", getComics);
comicsRouter.post("/", postComics);
comicsRouter.put("/:id", updateComics);
comicsRouter.delete("/:id", deleteComics);

module.exports = comicsRouter;