const express = require("express");
require("dotenv").config();
const { connectDB } = require("./src/config/db");
const comicsRouter = require("./src/api/routes/comics");
const libreriaRouter = require("./src/api/routes/librerias");

const app = express();

connectDB();

app.use(express.json());

//rutas de acceso
app.use("/api/v1/comics", comicsRouter);
app.use("/api/v1/librerias", libreriaRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Ruta no encontrada")
});

// levantar servidor
app.listen(3000, () => {
  console.log("Servidor levantado: http://localhost:3000");
})