var express = require('express');
var bodyParser = require('body-parser');
var ctrl = require('./controller/ctrl.js');
var middleware = require('./controller/middleware.js');
var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', ctrl.getName);
app.get('/location', ctrl.getLocation);
app.get('/occupations', ctrl.getOccupations);
app.get('/occupations/latest', ctrl.getLatestOccupations);
app.get('/hobbies', ctrl.getHobbies);
app.get('/hobbies/:type', ctrl.getSpecificHobbies);
app.get('/skillz', ctrl.getSkillz);
app.get('/skillz/:exp', ctrl.getSkillz);
app.get('/secrets/:username/:pin', middleware.verification, ctrl.getSecrets);

app.put('/name', ctrl.putName);
app.put('/location', ctrl.putLocation);

app.post('/hobbies', ctrl.postHobbie);
app.post('/occupations', ctrl.postOccupation);
app.post('/skillz', middleware.generateID, ctrl.postSkillz);

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
