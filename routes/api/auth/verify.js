const express = require("express");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const keys = require("../../../config/users/keys");
const smtp = require("../../../validation/config/email/vars");
const frontHost = require("../../../validation/config/front/server");

const router = express.Router();

// Access Models
const User = require("../../../models/users/User");
// verify Admin
const verify = require("../../../validation/authenticate/checkMiddleware/verify");
const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");

// verify email
router.post('/',function(req, res){
  let emailToken = req.body.token;
  // verify token
  jwt.verify(emailToken, keys.secretOrKey, (err, authData)=>{
    if(err){
      res.status(404).json({msg: "Token don't exist!"})
    }else{
      // check if user token exist
      User.findOne({ email : authData.email }).then(user => {
        if(user){
          verify(authData, User, res, emailToken);
        }
      }).catch(err => console.log("Something wrong with the token",err));

    }
  });
});

// verify email
router.get("/resend", authCheck, (req, res) => {
  // get user from token
  let user = req.authData;
  // search for the user
  User.findOne({email:user.email}).then(user=> {
    //Check if user is verified
    if(user.verified.isVerified){
      res.json({msg: user.email + " is already verified" })
    }else{
      // create a new token
      const payload = {
        id: user.id,
        email: user.email
      };
      jwt.sign(payload, keys.secretOrKey,{
          expiresIn: 3901556926 // 100 years
        },(err, token) => {
          user.verified.token = token
        }
      );
      user.save().then(user => {
        const smtpTransport = nodemailer.createTransport({
          host: smtp.server.host,
          port: smtp.server.port,
          auth: {
            user: smtp.server.auth.user,
            pass: smtp.server.auth.pass
          }
        });
        // Prepare Email
        let token, link, mailOptions;
        token = user.verified.token;
        link = frontHost.server + 'user/verify/?token=' + token;
        mailOptions = {
          to : user.email,
          subject : "Please confirm your Email account",
          html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
        }

        // Send Email
        smtpTransport.sendMail(mailOptions, function(error, response){
         if(error){
            res.json({
              message: "Oops something went wrong while sending",
              err: error
            });
         }else{
             res.json({
               message: "Please check your email to verify",
               user:user
             })
           }
         });
      })
    }
  }).catch(err => console.log(err));
})


module.exports = router;
