var express = require('express');
var bodyParser = require('body-parser');
var booksCtrl = require('./controllers/booksCtrl.js');
var session = require('express-session');
var app = express();

app.use(bodyParser.json());
app.use(session({
  secret: 'df67sdf67sadfg89rg23ad90f13d24fs',
  saveUninitialized: false,
  resave: false
}));

app.use(function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  next();
});

app.use(function(req, res, next) {
  req.body.id = 1;
  next();
});

app.get('/cart', function(req, res, next) {
  res.json(req.session);
});

app.post('/cart',  function(req, res, next) {
  if(!req.session.cart) { req.session.cart = []; }
  req.session.cart.push(req.body);
  res.json(req.session.cart);
});

app.get('/books', booksCtrl.index);
app.get('/books/:id', booksCtrl.show);
app.put('/books/:id', booksCtrl.update);
app.post('/books', booksCtrl.create);
app.delete('/books/:id', booksCtrl.destroy);

app.listen(3000, function() {
  console.log("Listening to port 3000");
});
