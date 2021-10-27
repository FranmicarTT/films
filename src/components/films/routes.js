const router = require('express').Router();
const _ = require('underscore');
const service = require('./service')

router.get('/', service.getAllFilms);
router.post('/new', service.newFilm);
router.put('/edit', service.editFilm);
router.delete('/delete', service.deleteFilm);

module.exports = router;