var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get genres
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}

// Add genre
module.exports.addGenres = function(genre, callback){
  Genre.create(genre, callback);
}
