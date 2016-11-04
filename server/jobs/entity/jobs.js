var mongoose = require('mongoose');

var Pieces = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    file: {
        type: String
    },
    classe: {
        type: String
    }
});

var Jobs = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    slogan: {
        type: String,
        required: true
    },
    bg: {
        type: String,
        required: true
    },
    pieces : [Pieces]
});

module.exports = mongoose.model('Pieces', Pieces);
module.exports = mongoose.model('Jobs', Jobs);
