const Film = require('./model');
const funtions = require('./functions');
const createError = require('http-errors');

module.exports.getAllFilms = async () => {
    const films = await Film.find({});
    return films;
}

module.exports.newFilm = async (film) => {
    const vFilm = await funtions.checkFilm(film);
    if (!vFilm) createError(400, 'Data incomplete');
    const newFilm = new Film(vFilm);
    await newFilm.save();
    return newFilm;
}

module.exports.editFilm = async (film) => {
    const vFilm = await funtions.checkFilm(film);
    console.log(film);
    console.log(vFilm)
    if (!vFilm || !film._id) createError(400, 'Data incomplete');
    const newFilm = new Film(vFilm);
    await Film.findByIdAndUpdate(funtions.toObjectId(film._id), newFilm)
    const updatedFilm = await Film.findById(film._id);
    return updatedFilm;
}

module.exports.deleteFilm = async (id) => await Film.findByIdAndRemove(funtions.toObjectId(id));