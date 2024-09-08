const mongoose = require("mongoose");
const Comic = require("../models/comics");
require("dotenv").config();
const { connectDB } = require("../config/db");

connectDB();

const comics = [
  {
    nombre: "Spider-Man",
    imagen: "spiderman.jpg",
    precio: 9,
    paginas: 120,
    categoria: "superheroes"
  },
  {
    nombre: "Batman",
    imagen: "batman.jpg",
    precio: 12,
    paginas: 150,
    categoria: "superheroes"
  },
  {
    nombre: "Lord of the Rings",
    imagen: "lotr.jpg",
    precio: 15,
    paginas: 200,
    categoria: "fantasia"
  }
];

const seedComics = async () => {
  try {
    await Comic.deleteMany(); // Limpiar la colección primero
    await Comic.insertMany(comics);
    console.log("Seed completado");
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
};

seedComics();
