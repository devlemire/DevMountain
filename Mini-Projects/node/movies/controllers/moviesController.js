var movies = require('../models/movies.js');

module.exports = {
  getAll: function (req, res, next) {
    res.json(movies);
  },

  getSpecific: function(req, res, next) {
    var movieIndex = req.params.id;
    res.json(movies[movieIndex]);
  },

  update: function(req, res, next) {
    var movieIndex = req.params.id;
    movies[movieIndex] = req.body;
    res.json(movies);
  },

  destroy: function(req, res, next) {
    var movieIndex = req.params.id;
    movies.splice(movieIndex, 1);
    res.json(movies);
  }
};
