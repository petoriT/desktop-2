const mongoose = require("mongoose");

// Notifications Schema
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  viewed: {
    type: Boolean,
  },
  store_id: {
    type: String,
    required: true,
  },
  order: {
    type: Object,
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
  user_email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// User model
const Notification = mongoose.model("notification", ActivitySchema);

module.exports = Notification;
