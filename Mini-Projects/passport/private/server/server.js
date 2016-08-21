var express = require('express');
var session = require('express-session');
var passport = require('passport');
var facebookStrategy = require('passport-facebook').Strategy;
var app = express();

app.use(session({secret: 'asdf23423sdgjk2'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new facebookStrategy({
  clientID: '145051979269944',
  clientSecret: '2210c437743fb6a885d130b89fad2ce1',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {

  successRedirect: '/me',
  failureRedirect: '/'

}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/me', function(req, res) {
  res.json(req.user);
});

app.listen(3000, function(){ console.log("Server initiated on port 3000"); });
