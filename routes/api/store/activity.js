const express = require("express");
const async = require("async");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");
const router = express.Router();

// Load Product model
const Activity = require("../../../models/store/Admin_activity");

// push activity
router.post("/pushActivity", authCheck, (req, res) => {
  const user = req.authData;
  const activity = req.body.activity;

  const new_activity = new Activity({
    store_id: user.store_id,
    type: activity.type,
    title: activity.title,
    msg: activity.msg,
    user_ini: activity.user_ini,
    user_name: activity.user_name,
  });
  new_activity.save().then((activity) => {
    res.json({
      activity: activity,
    });
  });
});

// push activity
router.post("/getActivities", authCheck, (req, res) => {
  const user = req.authData;

  Activity.find({ store_id: user.store_id }).then((activities) => {
    res.json({
      activities: activities,
    });
  });
});

module.exports = router;
