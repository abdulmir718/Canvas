const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    sold: {
        type: Boolean,
    },
})

const Painting = mongoose.model('painting', paintingSchema);

module.exports = Painting;