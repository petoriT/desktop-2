const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const User = require("../../models/users/Facebook_auth");
const keys = require('./keys');


//attach user id to a cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//retrieving id from a cookie and send user to a browser
passport.deserializeUser((id, done) => {
  User.findById({_id:id}).then( user => {
    done(null, user);
  }).catch(err=>console.log(err));
});

//Facebook Startegy
passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "/api/oauth/facebook/redirect",
    profileField: ['id', 'displayName', 'Photos', 'emails', 'phones']
  },(accessToken, refreshToken, profile, done) => {
    User.findOne({facebookId: profile.id}).then((user) => {
      if(user){
        done(null, user); //pass user to serializeUser
      }else{
        new User({
          facebookId: profile.id,
          name: profile.displayName,
          email: profile.email
        }).save().then((newuser)=>{
          done(null, newuser); //pass user to serializeUser
        }).catch(err => console.log(err));
      }
    }).catch(err => console.log(err));
   })
 )
