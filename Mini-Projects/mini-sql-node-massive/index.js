var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgress://jameslemire:9829@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString: connectionString});

var app = module.exports = express();
app.set('db', massiveInstance);

var ctrl = require('./controller/ctrl.js');
var db = app.get('db');
app.use(bodyParser.json());
app.use(cors());

// db.new_plane(function(err, planes) {
//   console.log(err, "plane added");
// });

// db.get_planes(function(err, planes) {
//   console.log(err, planes);
// });

ctrl.getPlanes(200);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
