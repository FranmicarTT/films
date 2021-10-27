const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    title: {type: String},
    director: [{type: String}],
    rate: {type: Number},
    date: {type: Date}
}, { timestamps: false, versionKey: false })

module.exports = mongoose.model('film', FilmSchema)