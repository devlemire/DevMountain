var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'a',
    password: 'a',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res, next) {
    var userFound = false;
    for(var i in users) {
      if(users[i].name === req.body.name && users[i].password === req.body.password) {
        req.session.currentUser = users[i];
        console.log("LOGIN SESSION: ", req.session);
        userFound = true;
        res.json({userFound: true, loggedInAs: users[i].name});
      }
    }
    if(!userFound) {
      res.json({userFound: false});
    }
  }
};
