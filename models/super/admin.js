const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  admin: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// User model
const User = mongoose.model("users", UserSchema);

module.exports = User;
