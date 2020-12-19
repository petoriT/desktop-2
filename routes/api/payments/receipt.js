const express = require("express");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const async = require("async");

const router = express.Router();

const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");

// Load Product model
const Order = require("../../../models/store/Order");
const Store = require("../../../models/store/Store");
const Order_Receipt = require("../../../models/store/Order_Receipt");
const Receipt = require("../../../models/store/Receipt");

// get user receipts

router.get("/get_user_receipts", authCheck, (req, res) => {
  let user = req.authData;
  //get user receipts
  Order_Receipt.find({ user_email: user.email })
    .then((receipts) => {
      res.json({ receipts: receipts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// get store receipts
router.get("/get_store_receipts", authCheck, (req, res) => {
  let user = req.authData;
  //get store receipts
  Order_Receipt.find({ store_id: user.store_id })
    .then((receipts) => {
      res.json({ receipts: receipts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// get store receipts
router.post("/get_store_receiptsById", authCheck, (req, res) => {
  let id = req.body.id;
  //get store receipts
  Order_Receipt.find({ store_id: id })
    .then((receipts) => {
      res.json({ receipts: receipts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// get receipt by order number
router.post("/get_order_receipt", authCheck, (req, res) => {
  let user = req.authData;
  let data = req.body;
  //get order receipt
  Order_Receipt.find({ order_number: data.order_number })
    .then((receipt) => {
      res.json({ receipt: receipt });
    })
    .catch((err) => {
      console.log(err);
    });
});

// update receipt
router.put("/update_receipt", authCheck, (req, res) => {
  let user = req.authData;
  let data = req.body; // modified receipt obj
  //update recipt
  Order_Receipt.findOneAndUpdate(
    { _id: data._id },
    data,
    { upsert: true },
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully saved.");
    }
  );

  //Send Updated status = StoreName Email
});

// remove receipt

/***********************************************/
// payment gateway receipt

// get receipt by m_payment_id
router.get("/get_payfast_receipts", authCheck, (req, res) => {
  let user = req.authData;
  //get store receipts
  Receipt.find()
    .then((receipts) => {
      console.log(receipts);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
