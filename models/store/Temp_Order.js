const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const Temp_OrderSchema = new Schema({
  user_email: {
    type: String,
    required: true,
  },
  pf_processing: {
    type: Object,
    required: true,
  },
  m_payment_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// User model
const Temp_Order = mongoose.model("temp_order", Temp_OrderSchema);

module.exports = Temp_Order;
