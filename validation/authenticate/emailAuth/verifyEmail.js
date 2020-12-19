const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const smtp = require("../../config/email/vars");
const frontHost = require("../../config/front/server");

module.exports = function emailAuth(password, user, req, res) {
  // Send verification Email
  const smtpTransport = nodemailer.createTransport({
    host: smtp.server.host,
    port: smtp.server.port,
    auth: {
      user: smtp.server.auth.user,
      pass: smtp.server.auth.pass,
    },
  });

  // Prepare Email
  let token, link, mailOptions;
  token = user.verified.token;
  link = frontHost.server + "user/verify/?token=" + token;
  mailOptions = {
    to: user.email,
    subject: "Please confirm your Email account",
    html:
      "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
      link +
      ">Click here to verify</a>" +
      "<br> Click on the link to change your password<br><a href=" +
      link +
      ">Click here to change password</a>" +
      "current pass: " +
      password,
  };

  // Send Email
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      res.json({
        message: "Oops something went wrong while sending",
        err: error,
      });
    } else {
      const payload = {
        id: user.id,
        email: user.email,
      };
      // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926, // 1 year
        },
        (err, token) => {
          res.json({
            message: "User registered, Please check your email to verify",
            user: user,
            token: token,
          });
        }
      );
    }
  });
};
