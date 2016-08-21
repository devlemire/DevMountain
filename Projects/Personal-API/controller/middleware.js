var skillz = require('../models/skillz.js');

var username = "james";
var pin = "1234";

module.exports = {
  //Middle Ware
  addHeaders: function(req, res, next) {
      res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

  generateID: function(req, res, next) {
    req.ID = skillz.length;
    next();
  },

  verification: function(req, res, next) {
    if(req.params.username === username && req.params.pin === pin) {
      next();
    } else {
      res.status(403).send();
    }
  }

};
