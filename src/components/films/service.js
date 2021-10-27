const controller = require('./controller');
const createError = require('http-errors');

module.exports.getAllFilms = async (req, res, next) => {
    try {
        res.send(await controller.getAllFilms());
    } catch (e) {
        next(createError(500, e));
    }
};

module.exports.newFilm = async (req, res, next) => {
    try {
        res.send(await controller.newFilm(req.body));
    } catch (e) {
        next(createError(500, e));
    }
};

module.exports.editFilm = async (req, res, next) => {
    try {
        res.send(await controller.editFilm(req.body));
    } catch (e) {
        next(createError(500, e));
    }
};

module.exports.deleteFilm = async (req, res, next) => {
    try {
        res.send(await controller.deleteFilm(req.query.id));
    } catch (e) {
        next(createError(500, e));
    }
};