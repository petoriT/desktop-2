const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  productImage: {
    data: Buffer,
    contentType: String
  },
  date: {
    type: Date,
    default: Date.now
  }

});

// Image model
const Image = mongoose.model('images', ImageSchema);

module.exports = Image;
