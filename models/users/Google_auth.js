const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// User model
const User = mongoose.model('google_user', UserSchema);

module.exports = User;
