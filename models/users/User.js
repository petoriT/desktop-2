const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  address: Schema.Types.Mixed,
  profileImage: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  verified: {
    isVerified: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      required: true,
    },
  },
  my_stores: {
    type: Array,
  },
  storeOwner: {
    type: Boolean,
    default: false,
  },
  store_id: {
    type: String,
  },
  user_agreement: {
    type: Boolean,
  },
});

// User model
const User = mongoose.model("users", UserSchema);

module.exports = User;
