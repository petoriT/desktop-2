const mongoose = require("mongoose");

// Notifications Schema
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  store_id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
  user_ini: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// User model
const Activity = mongoose.model("activity", ActivitySchema);

module.exports = Activity;
