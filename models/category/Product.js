const mongoose = require("mongoose");

// User Schema
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  storeId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: Object,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: Array,
    required: true,
  },
  metaTags: {
    type: Array,
    required: true,
  },
  features: {
    type: Array,
  },
  bill_of_material: {
    type: Object,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  modified_price: {
    type: Number,
  },
  amount: {
    type: Number,
    default: 1,
  },
  promo: {
    type: Boolean,
    required: false,
  },
  promo_type: {
    type: Array,
    required: false,
  },
  sale: {
    type: Boolean,
    required: false,
  },
  production_status: {
    type: String,
    default: "Active",
  },
  in_stock: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  next_available_date: {
    type: Date,
    default: Date.now,
  },
  sale_type: {
    type: Array,
    required: false,
  },
  likes: {
    type: Array,
    default: [],
  },
  ratings: {
    type: Array,
    default: [],
  },
  license: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Product model
const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
