const nodemailer = require("nodemailer");
const jwt = require('jwt-simple');
const keys = require("../../../config/users/keys");
const smtp = require("../../config/email/vars");
const frontHost = require("../../config/front/server");

module.exports = function emailAuth(user, req, res) {

  //Send verification Email
  const smtpTransport = nodemailer.createTransport({
    host: smtp.server.host,
    port: smtp.server.port,
    auth: {
      user: smtp.server.auth.user,
      pass: smtp.server.auth.pass
    }
  });

  // Create JWT Payload
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email
  };

  // create a unique secret key!
  const secret = user.password + '-' + user.date + keys.secretOrKey;
  const token = jwt.encode(payload, secret);

  // Prepare Email
  let mailOptions, host, link;
  host = req.get('host');
  link = frontHost.server + 'user/reset-password/?id=' + payload.id + '&token=' + token;
  mailOptions = {
      to : user.email,
      subject : "Reset Password",
      html : "Hello,<br> Please Click on the link to reset your password.<br><a href="+link+">Click here to reset Password</a>"
  }

  // Send email containing link to reset password.
  smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
      res.json({
        message: "Oops something went wrong while sending",
        err: error
      });
   }else{
     res.json({
       message: "Please check your email to reset your password",
       user:user
     })
   }
  });

}
