var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  getProfiles: function(req, res, next) {
    console.log("PROFILE SESSION: ", req.session);
    if(req.session.currentUser) {
      var friends = [];
      for(var i in profiles) {
        for(var j in req.session.currentUser.friends) {
            if(profiles[i].name === req.session.currentUser.friends[j]) {
              friends.push(profiles[i]);
            }
        }
      }
      res.json({currentUser: req.session.currentUser, friends: friends});
    } else {
      res.json({status: "Not Logged In"});
    }
  }
};
