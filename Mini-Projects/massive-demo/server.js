var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var db = massive.connectSync({db: 'massive_demo'});

var app = express();
app.use(bodyParser.json());

var port = 3000;

/*db.get_all_injuries(function(err, injuries) {
  console.log(injuries);
});*/

// db.get_all_incidents(function(err, incidents) {
//   console.log(incidents);
// });

app.get('/incidents', function(req, res) {
  db.get_all_incidents(function(err, injuries) {
    res.json(injuries);
  });
});

app.post('/incidents', function(req, res) {
  db.insert_incident([req.body.us_state, req.body.injury_id, req.body.cause_id], function(err, r) {
    console.log(err);
    res.json(r);
  });
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
