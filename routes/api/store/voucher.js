const express = require("express");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const async = require("async");

const router = express.Router();

const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");

// Load Product model
const Store = require("../../../models/store/Store");
const Voucher = require("../../../models/store/Voucher");
const Product = require("../../../models/category/Product");

//get voucher by id
router.post("/retrieve_voucher", (req, res) => {
  console.log(req.body.id);
  Voucher.findOne({ _id: req.body.id })
    .then((voucher) => {
      res.json({
        voucher: voucher,
      });
    })
    .catch((err) => res.json({ err: err }));
});

//get voucher by id
router.post("/retrieve_voucher_by_number", (req, res) => {
  Voucher.findOne({ voucher_number: req.body.voucher_number })
    .then((voucher) => {
      console.log(voucher);
      res.json({
        voucher: voucher,
      });
    })
    .catch((err) => res.json({ err: err }));
});

//get voucher by store id
router.get("/retrieve_store_voucher", authCheck, (req, res) => {
  let user = req.authData;
  Voucher.find({ store_id: user.store_id })
    .then((vouchers) => {
      res.json({
        vouchers: vouchers,
      });
    })
    .catch((err) => res.json({ err: err }));
});

// get all vouchers
router.get("/retrieve_all_vouchers", (req, res) => {
  Voucher.find()
    .then((vouchers) => {
      res.json({
        vouchers: vouchers,
      });
    })
    .catch((err) => res.json({ err: err }));
});

router.post("/retrieve_all_vouchersById", (req, res) => {
  let id = req.body.id;
  Voucher.find({ store_id: id })
    .then((vouchers) => {
      res.json({
        vouchers: vouchers,
      });
    })
    .catch((err) => res.json({ err: err }));
});

// store temp order
router.post("/create_voucher", authCheck, (req, res) => {
  let data = req.body.promo;
  let store_id = req.body.store_id;
  // Generate order Number
  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  let length = 10;
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  console.log("hello", req.body)
  let products = data.products; //array of product in voucher
  let voucher_number = randomString(length, chars);
  // get store Id
  Store.findOne({ _id: store_id }).then((store) => {
    let quota;
    let discount;
    let items_exceeding;
    let m_array = products.map((product) => {
      //get primary product
      let modified_product = Product.findOne({ _id: product.p_id })
        .then((prod) => {
          //get secondary_product
          if (product.s_id) {
            let m_p = Product.findOne({ _id: product.s_id })
              .then((p) => {
                product = { ...product, prod: prod, s_pro: p };
                return product;
              })
              .catch((err) => console.log(err));
          } else {
            return (product = { ...product, prod: prod, s_pro: null });
          }
          return m_p;
        })
        .catch((err) => console.log(err));
      return modified_product;
    });
    Promise.all(m_array).then(function (results) {
      const voucher = new Voucher({
        voucher_number: voucher_number,
        store_id: store._id,
        run_sale: data.run_sale,
        type: data.type,
        title: data.title,
        products: results, //modify objects array of product objects
        total_quota: data.total_quota,
        platform: data.platform,
        exp_date: data.exp_date,
      });
      voucher.save().then((voucher) => {
        if (voucher.run_sale) {
          // Update Products -- Sale
          async.each(voucher.products, function (product, callback) {
            if (product) {
              Product.findOne({ _id: product.p_id }).then((product) => {
                product.sale = true;
                product.sale_type = voucher._id;
                product.save();
              });
            }
          });
        } else {
          // Update Products -- Promo
          async.each(data.products, function (product, callback) {
            if (product) {
              Product.findOne({ _id: product.p_id }).then((product) => {
                product.promo = true;
                product.promo_type = voucher._id;
                product.save();
              });
            }
          });
        }

        res.json({ voucher: voucher });
      });
    });
  });
});

module.exports = router;
