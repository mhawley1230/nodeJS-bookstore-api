var mongoose = require('mongoose');

// Genre Schema
var bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String
  },
  pages: {
    type: Number
  },
  image_url: {
    type: String,
    required: true
  },
  buy_url: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get books
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
}

// Get book by id
module.exports.getBookById = function(id, callback){
  Book.findById(id, callback);
}

// Add book
module.exports.addBook = function(book, callback){
  Book.create(book, callback);
}

// Update book
module.exports.updateBook = function(id, book, options, callback){
  var query = {_id: id}
  var update = {
    title: book.title,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    image_url: book.image_url,
    buy_url: book.buy_url
  }
  Book.findOneAndUpdate(query, update, options)
}

// Delete book
module.exports.removeBook = function(id, callback){
  var query = {_id: id};
  Book.remove(query, callback);
}
