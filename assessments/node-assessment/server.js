var express = require('express');
var bodyParser = require('body-parser');
var users = require('./users.json');
var app = module.exports = express();

app.use(bodyParser.json());

app.get('/api/users', function(req, res) {
  var rArray = [];
  var theQuery;
  var theQueryValue;
  for(var i in req.query) {
    theQuery = i;
    theQueryValue = req.query[i];
  }

  // console.log("THE QUERY", theQuery);
  // console.log("THE VALUE:", theQueryValue);

  if(!theQuery) {
    res.status(200).send(users);
  } else {
    for(var j in users) {
      if(users[j][theQuery] == theQueryValue) {
        // console.log(users[j][theQuery]);
        rArray.push(users[j]);
      }
    }
    res.status(200).send(rArray);
  }
});

// app.get('/api/users/:priv', function(req, res) {
//   var rArray = [];
//   // console.log("PRIV: " +req.params.priv);
//   for(var i in users) {
//     if(users[i].type == req.params.priv) {
//       rArray.push(users[i]);
//     }
//   }
//   res.json(rArray);
// });

app.post('/api/users', function(req, res) {
  var user = {
    "id": users.length + 1,
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "gender": req.body.gender,
    "language": req.body.language,
    "age": req.body.age,
    "city": req.body.city,
    "state": req.body.state,
    "type": req.body.type,
    "favorites": []
  };

  users.push(user);

  res.status(200).send(user);
});

app.post('/api/users/admin', function(req, res) {
  var user = {
   "id": users.length + 1,
   "first_name": req.body.first_name,
   "last_name": req.body.last_name,
   "email": req.body.email,
   "gender": req.body.gender,
   "language": req.body.language,
   "age": req.body.age,
   "city": req.body.city,
   "state": req.body.state,
   "type": 'admin',
 };

   users.push(user);

  res.status(200).send(user);
});

//bug
app.post('/api/users/language/:userId', function(req, res, next) {
  var user;
  for(var i in users) {
    if(users[i].id == req.params.userId) {
      users[i].language = req.body.language;
      user = users[i];
    }
  }
  res.status(200).send(user);
});

//#9
app.get('/api/users/:id', function(req, res) {
  var user;
  for(var i in users) {
    if(users[i].id == req.params.id) {
      user = users[i];
    }
  }
  if(user) {
    res.status(200).send(user);
  } else {
    res.status(404).send();
  }
});

//bug
app.post('/api/users/forums/:userId', function(req, res) {
  for(var i in users) {
    if(users[i].id == req.params.userId) {
      users[i].favorites.push(req.body.add);
    }
  }

  res.status(200).send();
});

app.delete('/api/users/forums/:userId', function(req, res) {
  for(var i in users) {
    if(users[i].id == req.params.userId) {
      var theIndex = users[i].favorites.indexOf(req.query.favorite);
      users[i].favorites.splice(theIndex, 1);
    }
  }

  res.status(200).send();
});

app.delete('/api/users/:id', function(req, res) {
  for(var i in users) {
    if(users[i].id == req.params.id) {
      users.splice(i, 1);
    }
  }

  res.status(200).send();
});

app.put('/api/users/:id', function(req, res) {
  for(var i in users) {
    if(users[i].id == req.params.id) {
      for(var j in users[i]) {
        for(var l in req.body) {
          if(j === l) {
            users[i][j] = req.body[l];
          }
        }
      }
    }
  }

  res.status(200).send();
});































app.listen(3000, function() { console.log("Server initiated on port 3000"); });
