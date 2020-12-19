const express = require("express");
const async = require("async");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");
const router = express.Router();

// Load Product model
const Notification = require("../../../models/users/Notifications");

// Register Product
router.post("/pushNotification", authCheck, (req, res) => {
  const user = req.authData;
  const notification = req.body.notification;
});

// push activity
router.get("/getNotifications", authCheck, (req, res) => {
  const user = req.authData;

  Notification.find({ user_email: user.email }).sort({_id: -1}).then((notifications) => {
    res.json({
      notifications: notifications,
    });
  });
});

module.exports = router;
