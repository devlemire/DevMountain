var express = require('express');
var bodyParser = require('body-parser');
var moviesController = require('./controllers/moviesController.js');
var app = express();

app.use(bodyParser.json());

app.use(function(req,res,next) {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  next();
});

app.use(function(req,res,next) {
  if(req.query.admin === 'true') {
    return next();
  }

  res.status(405);
});

app.get('/movies', moviesController.getAll);

app.get('/movies/:id', moviesController.getSpecific);

app.put('/movies/:id', moviesController.update);

app.delete('/movies/:id', moviesController.destroy);

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
