var data = require('../models/myInfo.js');
var skillz = require('../models/skillz.js');
var id = require('../controller/middleware.js');

var secrets = {secret: "I like pizza"};

module.exports = {
  //Read Only Endpoints
  getName: function(req, res, next) {
    res.json({name: data.name});
  },

  getLocation: function(req, res, next) {
    res.json({location: data.location});
  },

  getOccupations: function(req, res, next) {
    if(req.query.order) {
      var occupations = data.occupations;
      if(req.query.order == "asc") {
        occupations = occupations.sort();
      } else if(req.query.order == "desc") {
        occupations = occupations.reverse();
      } else {
        res.json({occupations: data.occupations});
      }
      res.json({occupations: occupations});
    } else {
      res.json({occupations: data.occupations});
    }
  },

  getLatestOccupations: function(req, res, next) {
    res.json({latestOccupation: data.latestOccupation});
  },

  getHobbies: function(req, res, next) {
    res.json({hobbies: data.hobbies});
  },

  getSpecificHobbies: function(req, res, next) {
    var returnData = [];
    var hobbies = getData('hobbies').hobbies;
    for(var i = 0; i < hobbies.length; i++) {
      if(hobbies[i].type === req.params.type) {
        returnData.push(hobbies[i]);
      }
    }

    res.json(returnData);
  },

  getSkillz: function(req, res, next) {
    if(req.query.exp) {
      var returnData = [];
      for(var i in skillz) {
        console.log(skillz[i].experience);
        if(skillz[i].experience.toLowerCase() == req.query.exp.toLowerCase()) {
          returnData.push(skillz[i]);
        }
      }

      res.json(returnData);
    } else {
      res.json(skillz);
    }
  },

  getSecrets: function(req, res, next) {
    res.json(secrets);
  },

  //Put Endpoints
  putName: function(req, res, next) {
    data.name = req.body.name;
    res.json({name: data.name});
  },

  putLocation: function(req, res, next) {
    data.location =req.body.location;
    res.json({location: data.location});
  },

  //Post Endpoints
  postHobbie: function(req, res, next) {
    data.hobbies.push(req.body);
    res.json(data.hobbies);
  },

  postOccupation: function(req, res, next) {
    data.occupations.push(req.body.occupation);
    res.json(data.occupations);
  },

  postSkillz: function(req, res, next) {
    skillz.push({id: req.ID, name: req.body.name, experience: req.body.experience});
    res.json(skillz);
  }

};
