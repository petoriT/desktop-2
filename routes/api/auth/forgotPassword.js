const express = require("express");
const keys = require("../../../config/users/keys");
const jwt = require('jwt-simple');

const router = express.Router();

// Access Validations
const validateEmailInput = require("../../../validation/authenticate/userValidation/forgotPassword");
const sendPasswordLink = require("../../../validation/authenticate/emailAuth/sendPassword");
const resetValidation =require("../../../validation/authenticate/userValidation/resetPasswordValidation");
const updatePassword =require("../../../validation/authenticate/userHashing/updatePassword");

// Access Models
const User = require("../../../models/users/User");

// Email Reset Link
router.post("/resetLink", (req, res) => {
  const { errors, isValid } = validateEmailInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    // Send link
    sendPasswordLink(user, req, res)
  }).catch(err => console.log(err, "Email is not registered"));
});

// Handle new password and update db
router.post('/resetPassword', function(req, res) {
  const { errors, isValid } = resetValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ _id: req.body.id }).then(user => {
      // Decrypt and update if user exists
      const secret = user.password + '-' + user.date + keys.secretOrKey;
      const payload = jwt.decode(req.body.token, secret);
      if(payload){
        // Update Password
        updatePassword(user, req.body, req, res);
      }else{
        res.json({message: "Token Invalid"})
      }
  }).catch(err => res.json({message: "Something wrong with the token"}));

});

module.exports = router;
