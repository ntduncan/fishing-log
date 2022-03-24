
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catchSchema = new Schema({
    bait: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    length: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Catch', catchSchema);