var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require('./config/config.js');
var connectionString = "postgress://jameslemire:9829@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString: connectionString});
var app = module.exports = express();
app.set('db', massiveInstance);
var productsCtrl = require('./controller/productsCtrl.js');

app.use(bodyParser.json());
app.post('/products', productsCtrl.create);
app.post('/product', productsCtrl.getOne);
app.get('/products', productsCtrl.getAll);
app.put('/product', productsCtrl.update);
app.delete('/product', productsCtrl.destroy);

app.listen(config.port, function() {
  console.log("Listening on port " + config.port);
});
