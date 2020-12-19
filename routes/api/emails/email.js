const express = require("express");

const router = express.Router();

const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck")
const sendEmail = require("../../../utils/emails/send_email")

// get user receipts
router.post("/send_email", authCheck, (req, res) => {

  let user = req.authData
  let body = req.body

  // handle attachments
  let attachments;
  if(
    body.attachments.length < 1 ||
    body.attachments == null ||
    body.attachments == undefined
  ){
    attachments = []
  }else{
    attachments = body.attachments
  }

  data = {
    //construct data
    admin_email: user.email,
    user_email: body.email,
    subject: body.subject,
    message: body.message,
    html_message: body.html_message,
    attachments: attachments,
  },

  // send Email
  sendEmail(data, req, res)

})



module.exports = router;
