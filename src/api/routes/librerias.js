const libreriaRouter = require("express").Router();
const { getLibrerias, postLibrerias, updateLibrerias, deleteLibrerias, getLibreriaById } = require("../controllers/librerias");


libreriaRouter.get("/", getLibrerias);
libreriaRouter.get("/:id", getLibreriaById);
libreriaRouter.post("/", postLibrerias);
libreriaRouter.put("/:id", updateLibrerias);
libreriaRouter.delete("/:id", deleteLibrerias);

module.exports = libreriaRouter;