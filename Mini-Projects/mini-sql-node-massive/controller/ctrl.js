var app = require('../index');
var db = app.get('db');

module.exports = {
  getPlanes: function(i) {
    db.get_planes([i], function (err, planes) {
      console.log(err, planes);
    });
  }
};
