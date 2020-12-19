const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const Order_ReceiptSchema = new Schema({
  m_payment_id: {
    type: String,
    required: true
  },
  order_number: {
    type: String,
    required: true
  },
  payment_status: {
    type: String,
    required: true
  },
  user_email: {
    type:String,
    required: true
  },
  store_id: {
    type:String,
    required: true
  },
  delivery_address: {
    type:String,
    required: false
  },
  items: {
    type: Array,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// User model
const Order_Receipt = mongoose.model('order_Receipt', Order_ReceiptSchema);

module.exports = Order_Receipt;
