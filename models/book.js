const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    imgUrl: String,
    linkUrl: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;