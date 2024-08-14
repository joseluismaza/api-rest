const Comic = require("../models/comics");

const getComics = async (req, res, next) => {
  try {
    const comics = await Comic.find();
    return res.status(200).json(comics);
  } catch (error) {
    return res.status(400).json("No se han podido obtener los datos de los comics")

  }
}

const getComicById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comics = await Comic.findById(id);
    return res.status(200).json(comics);
  } catch (error) {
    return res.status(400).json("No se encuentra ningún cómic con ese nombre")
  }
}

const getComicByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const comics = await Comic.find({ categoria });
    return res.status(200).json(comics);

  } catch (error) {
    return res.status(400).json("No hay ningún cómic en esa categoria")

  }
}

const postComics = async (req, res, next) => {
  try {
    const newComic = new Comic(req.body);
    const comicSaved = await newComic.save();
    return res.status(201).json(comicSaved);

  } catch (error) {
    return res.status(400).json("No se ha publicado ningún cómic")

  }
}

const updateComics = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newComic = new Comic(req.body);
    newComic._id = id; // el ID nuevo sea igual al viejo
    const comicUpdated = await Comic.findByIdAndUpdate(id, newComic, {
      new: true,
    });
    return res.status(200).json(comicUpdated);
  } catch (error) {
    return res.status(400).json("No se ha actualizado ningún cómic")

  }
}

const deleteComics = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comicDeleted = await Comic.findByIdAndDelete(id);
    return res.status(200).json(comicDeleted);
  } catch (error) {
    return res.status(400).json("El borrado no ha sido satisfactorio")

  }
}

module.exports = {
  getComics,
  getComicByCategory,
  getComicById,
  postComics,
  updateComics,
  deleteComics
}