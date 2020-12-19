const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tag_line: {
    type: String,
  },
  logo: {
    type: Array,
  },
  userEmail: {
    type: String,
    required: true,
  },
  storeEmail: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  delivery: {
    type: Array,
    required: true,
    default: ["NotYet"],
  },
  comp_reg_num: {
    type: String,
    require: true,
    default: "Not registered",
  },
  out_bound_fee: {
    type: Number,
  },
  delivery_free_places: {
    type: Array,
  },
  users: {
    type: Array,
  },
  lisence: {
    type: Array,
  },
  free_trial: {
    type: Object
  },
  return_policy: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// User model
const Store = mongoose.model("store", StoreSchema);

module.exports = Store;
