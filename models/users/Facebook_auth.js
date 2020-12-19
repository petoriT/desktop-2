const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

// Facebook Schema
const FacebookSchema = new Schema({
  facebookId:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email:{
    type: mongoose.Schema.Types.Mixed
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// User model
const UserFB = mongoose.model('facebook_user', FacebookSchema);

module.exports = UserFB;
