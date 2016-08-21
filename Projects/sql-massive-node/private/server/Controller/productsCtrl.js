var app = require('../server.js');
var db = app.get('db');

module.exports = {
  create: function(req, res, next) {
    console.log(db);
    db.queries.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url], function(err, result) {
      res.status(200).send('OK');
    });
  },
  getOne: function(req, res, next) {
    db.queries.read_product([req.body.id], function(err, r) {
      console.log(db);
      res.status(200).json(r);
    });
  },
  getAll: function(req, res, next) {
    db.queries.read_all_products(function(err, r) {
      res.json(r);
    })
  },
  update: function(req, res, next) {
    db.queries.update_product([req.body.description, req.body.id], function(err, r) {
      res.status(200).json(r);
    });
  },
  destroy: function(req, res, next) {
    db.queries.delete_product([req.body.id], function(err, r) {
      res.status(200).send('DELETED');
    });
  }
};
