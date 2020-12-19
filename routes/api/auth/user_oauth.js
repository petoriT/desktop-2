const express = require("express");
const passport = require("passport");
const jwt = require("jwt-simple");
const keys = require("../../../config/users/keys");
const frontHost = require("../../../validation/config/front/server");

const router = express.Router();

//auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

//callback route google strategy
router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/api/users/login" }),
  (req, res) => {
    //redirect the user to Front End
    const payload = {
      id: req.user.googleId,
    };
    const encryptedGoogleId = jwt.encode(payload, keys.secretOrKey);
    return res.redirect(
      frontHost.server + "user/google/?id=" + encryptedGoogleId
    );
  }
);

//Logout
router.get("/logout", (req, res) => {
  //handle with passport
  req.logout();
  res.redirect(frontHost.server + "user/login/");
});

module.exports = router;
