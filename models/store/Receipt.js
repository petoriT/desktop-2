const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
  m_payment_id: {
    type: String,
  },
  receipt: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// User model
const Receipt = mongoose.model('receipt', ReceiptSchema);

module.exports = Receipt;
