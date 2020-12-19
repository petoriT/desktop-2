const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  m_payment_id: {
    type: String,
    required: true,
  },
  fullfilled: {
    type: Boolean,
    default: false,
  },
  return: {
    type: Object,
  },
  order_number: {
    type: String,
    required: true,
  },
  payment_status: {
    type: String,
    required: true,
  },
  commit_date: {
    type: Date,
  },
  delivery_date: {
    type: String,
  },
  delivery_ready: {
    type: Boolean,
    default: false,
  },
  delivery_status: {
    type: String,
  },
  delivery_date: {
    type: Date,
  },
  delivery_type: {
    type: String,
  },
  courier_name: {
    type: String,
  },
  courier_ref: {
    type: String,
  },
  courier_OTP: {
    type: String,
  },
  user_email: {
    type: String,
    required: true,
  },
  storeId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// User model
const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
