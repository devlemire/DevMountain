var books = require('../models/books.js');

module.exports = {
  index: function(req, res, next) {
    res.json(books);
  },
  show: function(req, res, next) {
    var bookIndex = req.params.id;
    res.json(books[bookIndex]);
  },
  update: function(req, res, next) {
    var bookIndex = req.params.id;
    books[bookIndex] = req.body;
    res.json(books);
  },
  create: function(req, res, next) {
    books.push(req.body);
    res.json(books);
  },
  destroy: function(req, res, next) {
    var bookIndex = req.params.id;
    books.splice(bookIndex, 1);
    res.sendStatus(204);
  }
};
