const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Category model
const Category = mongoose.model("categories", CategorySchema);

module.exports = Category;
