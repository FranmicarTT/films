const mongoose = require('mongoose')

module.exports.checkFilm  = async(film) => {
    const newFilm = {};
    if(!film.title && !film.director && !film.date && !film.rate !== null) return false;
    newFilm.title = film.title;
    newFilm.director = film.director;
    newFilm.date = film.date;
    newFilm.rate = film.rate;
    if (film._id) newFilm._id = film._id;
    return newFilm;
}

module.exports.toObjectId = (id) => mongoose.Types.ObjectId(id);