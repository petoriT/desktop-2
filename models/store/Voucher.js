const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const VoucherSchema = new Schema({
  voucher_number: {
    type: String,
    required: true,
  },
  store_id: {
    type: String,
    required: true,
  },
  run_sale: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: false,
  },
  total_quota: {
    type: Number,
    required: false,
  },
  items_sold: {
    type: Number,
    required: false,
  },
  platform: {
    type: Array,
    required: true,
  },
  exp_date: {
    type: Date,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// User model
const Voucher = mongoose.model("voucher", VoucherSchema);

module.exports = Voucher;
