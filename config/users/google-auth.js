const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require("../../models/users/Google_auth");
const keys = require('./keys');

//attach user id to a cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//retrieving id from a cookie and send to a browser
passport.deserializeUser((id, done) => {
  User.findById({_id:id}).then( user => {
    done(null, user);//attach user properties to req -->access to this page
  }).catch(err=>console.log(err));
});

//Google Strategy
passport.use(new GoogleStrategy({
  //options for googleStrategy
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: "/api/oauth/google/redirect"
}, (accessToken, refreshToken, profile, done) => {
  //passport cb function
   User.findOne({googleId: profile.id}).then((user) => {
     if(user){
       done(null, user); //pass user to serializeUser
     }else{
       new User({
         googleId: profile.id,
         name: profile.displayName,
         email: profile.emails[0]
       }).save().then((newuser)=>{
         done(null, newuser); //pass user to serializeUser
       }).catch(err => console.log(err));
     }
   }).catch(err => console.log(err));
  })
)
