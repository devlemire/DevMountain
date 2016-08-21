var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config/config.js');
var profileCtrl = require('./controller/profileCtrl.js');
var userCtrl = require('./controller/userCtrl.js');

var app = express();

app.use(cors(config.corsOptions));
app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getProfiles);

app.listen(config.port, function() {
  console.log("Listening on port " + config.port);
});
