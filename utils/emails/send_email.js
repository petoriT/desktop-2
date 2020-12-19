const nodemailer = require("nodemailer");
const smtp = require("../../validation/config/email/vars");
const frontHost = require("../../validation/config/front/server");

module.exports = function sendEmail(data, req, res) {

  // Config email
  const smtpTransport = nodemailer.createTransport({
    host: smtp.server.host,
    port: smtp.server.port,
    auth: {
      user: smtp.server.auth.user,
      pass: smtp.server.auth.pass
    }
  });

  // Prepare Email
  mailOptions = {
    from: data.admin_email,
    to : data.user_email,
    subject : data.subject,
    text: data.message,
    html : data.html_message + "<br>" + "host: <a href="+frontHost.server+">Cartalist</a>",
    attachments: data.attachments
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
     message: "Email sent!",
     data: response
    })
   }
  })

}
