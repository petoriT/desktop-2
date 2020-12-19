const express = require("express");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const async = require("async");

const router = express.Router();

const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");

// Load Product model
const Order = require("../../../models/store/Order");
const Receipt = require("../../../models/store/Receipt");
const Store = require("../../../models/store/Store");
const Product = require("../../../models/category/Product");
const Temp_Order = require("../../../models/store/Temp_Order");
const Order_Receipt = require("../../../models/store/Order_Receipt");
const Notification = require("../../../models/users/Notifications");

//delivery
router.post("/update_order_delivery", (req, res) => {
  let data = req.body;
  Order.findOne({
    courier_ref: data.courier_ref,
    courier_OTP: data.courier_OTP,
  })
    .then((order) => {
      if (!order.fullfilled) {
        order.fullfilled = true;
        order.delivery_status = "Delivered";
        order
          .save()
          .then((new_order) => {
            //push notification
            let today = new Date();
            let msg = `Order ${new_order.order_number} was delivered on ${today}, please review order here`;
            const new_notification = new Notification({
              order: new_order,
              store_id: new_order.storeId,
              type: "Order_review",
              title: "Activity log",
              msg: msg,
              user_email: new_order.user_email,
            });
            new_notification.save();
            //return new_notification todo:
            res.json({ order: new_order });
          })
          .catch((err) => console.log({ err: err, msg: "no notifcation" }));
      } else {
        res.json({ msg: "Sorry already fullfilled", order: order });
      }
    })
    .catch((err) => console.log(err));
});

// store temp order
router.post("/create_order", authCheck, (req, res) => {
  let data = req.body.data;
  let user = req.authData;

  if (data) {
    const order = new Temp_Order({
      user_email: user.email,
      pf_processing: data,
      m_payment_id: data.m_payment_id,
      status: "INCOMPLETE",
      cart: req.body.cart,
    });
    order
      .save()
      .then((order) => {
        res.json({ order: order.order });
      })
      .catch((err) => console.log(err));
  }
});

//get user order
router.get("/get_user_orders", authCheck, (req, res) => {
  let user = req.authData;
  Order.find({ user_email: user.email })
    .then((orders) => {
      if (orders) {
        res.json({ orders: orders });
      } else {
        res.json({ message: "no order" });
      }
    })
    .catch((err) => err);
});

// admin get orders
router.get("/get_store_orders", authCheck, (req, res) => {
  let user = req.authData;

  Order.find({ storeId: user.store_id })
    .then((orders) => {
      if (orders) {
        res.json({ orders: orders });
      } else {
        res.json({ message: "no orders" });
        console.log("no orders");
      }
    })
    .catch((err) => console.log(err));
});

router.post("/get_store_ordersById", authCheck, (req, res) => {
  let id = req.body.id;
  console.log(req.body);
  Order.find({ storeId: id })
    .then((orders) => {
      console.log(id, orders);
      if (orders) {
        res.json({ orders: orders });
      } else {
        res.json({ message: "no orders" });
        console.log("no orders");
      }
    })
    .catch((err) => console.log(err));
});

// admin Update order
router.post("/update_order_status", authCheck, (req, res) => {
  console.log(req.body)
  let data = req.body.data;
  let store_id = req.body.store_id;
  // Generate Random Number for order number
  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (data.commit_date) {
    Order.findOne({ _id: data.order_id })
      .then((order) => {
        order.commit_date = data.commit_date;
        order.delivery_ready = false;
        order.delivery_status = `Order is being processed`;
        order
          .save()
          .then((new_order) => {
            //push notification
            let msg = `Order ${new_order.order_number} is being processed and estimated delivery date is: ${data.commit_date}`;
            const new_notification = new Notification({
              order: new_order,
              store_id: store_id,
              type: "Order_progress",
              title: "Order Progress",
              msg: msg,
              user_email: new_order.user_email,
            });
            new_notification.save();
            res.json({ order: new_order });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  } else if (
    data.courier_name &&
    data.courier_ref &&
    data.delivery_type == "Courier"
  ) {
    //update ready for delivery
    let otp = randomString(5, "0123456789");
    Order.findOne({ _id: data.order_id })
      .then((order) => {
        order.delivery_ready = true;
        order.delivery_status = "Delivery on the Way";
        order.delivery_type = data.delivery_type;
        order.courier_name = data.courier_name;
        order.courier_ref = data.courier_ref;
        order.courier_OTP = otp;
        order.delivery_date = data.delivery_date;
        order
          .save()
          .then((new_order) => {
            //push notification
            let msg = `Order ${new_order.order_number} is ready and delivery date is ${data.delivery_date}. On delivery Please present OTP: ${otp} & Ref: ${data.courier_ref} to verify your order`;
            const new_notification = new Notification({
              order: new_order,
              store_id: store_id,
              type: "Order_progress",
              title: "Order Progress",
              msg: msg,
              user_email: new_order.user_email,
            });
            new_notification.save();
            res.json({ order: new_order });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  } else if (data.delivery_type === "Self" && data.self) {
    let ref = randomString(7, chars);
    let otp = randomString(5, "0123456789");
    Order.findOne({ _id: data.order_id })
      .then((order) => {
        order.delivery_ready = true;
        order.delivery_status = "Delivery on the Way";
        order.delivery_type = data.delivery_type;
        order.courier_ref = ref;
        order.courier_OTP = otp;
        order.delivery_date = data.delivery_date;
        order
          .save()
          .then((new_order) => {
            let msg = `Order ${new_order.order_number} is ready and delivery date is ${data.delivery_date}. On delivery Please present OTP: ${otp} & Ref: ${ref} to verify your order`;
            const new_notification = new Notification({
              order: new_order,
              store_id: store_id,
              type: "Order_progress",
              title: "Order Progress",
              msg: msg,
              user_email: new_order.user_email,
            });
            new_notification.save();
            res.json({ order: new_order });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  } else if (data.return_reason && data.return) {
    //user return
    Order.updateOne(
      { _id: data.order_id, "items._id": data.product._id },
      {
        $set: {
          "items.$.return": data.return_reason,
          return: data.return_reason,
        },
      },
      (err, result) => {
        if (err) {
          res.status(500).json({ error: "Unable to update competitor." });
        } else {
          Order.findOne({ _id: data.order_id })
            .then((order) => {
              //push notification
              let msg = `${data.product.productName} on Order ${order.order_number} return to supplier`;
              const new_notification = new Notification({
                store_id: store_id,
                type: "Order_progress",
                title: "Order Progress",
                msg: msg,
                order: order,
                user_email: order.user_email,
              });
              new_notification.save();

              res.json({ order: order });
            })
            .catch((err) => console.log(err));
        }
      }
    );
  } else {
    //update order status
    let product = data.item;
    Order.updateOne(
      { _id: data.order_id, "items._id": product._id },
      { $set: { "items.$.order_status": data.product_status } },
      (err, result) => {
        if (err) {
          res.status(500).json({ error: "Unable to update competitor." });
        } else {
          Order.findOne({ _id: data.order_id })
            .then((order) => {
              //push notification
              let msg = `${product.productName} on Order ${order.order_number} is ${data.product_status}`;
              const new_notification = new Notification({
                store_id: store_id,
                type: "Order_progress",
                title: "Order Progress",
                msg: msg,
                order: order,
                user_email: order.user_email,
              });
              new_notification.save();

              res.json({ order: order });
            })
            .catch((err) => console.log(err));
        }
      }
    );
  }
});

// User update on delivery

//admin update delivery status

//PayfastS
router.post("/notify_url", (req, res) => {
  //Receive the data posted by PayFast
  const pfData = req.body;
  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  let length = 5;
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //Notify PayFast that the information has been received
  if (pfData) {
    res.status(200).send({ message: "Received, Thank you" });
  } else {
    res.status(400).send({ message: "No data!" });
  }

  //Perfom secuity checks
  if (
    //Verify the source IP address belongs to PayFast todo:
    true
    //'www.payfast.co.za' || 'sandbox.payfast.co.za' || 'w1w.payfast.co.za' || 'w2w.payfast.co.za' ||
  ) {
    console.log(
      "IPPPPPPPPPPP: ",
      req.connection.remoteAddress,
      req.headers["x-forwarded-for"]
    );
    //if lisence
    if (pfData.item_name == "Lisence" && pfData.payment_status == "COMPLETE") {
      Temp_Order.find({ m_payment_id: pfData.m_payment_id })
        .then((order) => {
          let data = order;
          let lisence = data[0].cart[0];
          console.log(data[0].pf_processing,pfData)
          if (
            //Verify the security signature is valid todo:
            data[0].pf_processing.item_name == pfData.item_name &&
            data[0].pf_processing.item_description == pfData.item_description &&
            //Verify the payment amount matches your order amount
            data[0].pf_processing.amount == pfData.amount_gross
            //Verify the data received is valid
          ) {
            Order.findOne({
              m_payment_id: pfData.m_payment_id,
            })
              .then((oxo) => {
                //Verify that the order hasn’t been processed already
                if (!oxo) {
                  Store.find({ _id: lisence.store_id })
                    .then((store) => {
                      const receip = new Receipt({
                        m_payment_id: pfData.m_payment_id,
                        receipt: pfData,
                      });
                      receip.save();
                      Store.updateOne(
                        { _id: lisence.store_id},
                        { $push: { lisence: lisence } },
                        { safe: true, upsert: true },
                        function (error, success) {
                          if (error) {
                            console.log(error);
                          } else {
                            console.log("store modified: ", success);
                            let receipt = new Order_Receipt({
                              m_payment_id: pfData.m_payment_id,
                              order_number: `License-${randomString(8, chars)}`,
                              payment_status: pfData.payment_status,
                              user_email: data[0].user_email,
                              store_id: store[0]._id,
                              delivery_address: null,
                              items: data[0].cart,
                              total_price: pfData.amount_gross,
                              status: "COMPLETE",
                            });
                            receipt
                              .save()
                              .then((re) => {
                                console.log(re);
                                
                                console.log("receipt saved");
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          }
                        }
                      );
                    })
                    .catch((err) => err);
                } else {
                  //log error attempt
                  console.log("Order Already made");
                }
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => err);
    } else {
      console.log("one");
      if (pfData.payment_status == "COMPLETE" && pfData.item_name !== "Lisence") {
        // Generate Random Number for order number
        
        //make order
        Temp_Order.find({ m_payment_id: pfData.m_payment_id })
          .then((order) => {
            let data = order[0];
            if (
              //Verify the security signature is valid todo:
              data.pf_processing.item_name == pfData.item_name &&
              //Verify the payment amount matches your order amount
              data.pf_processing.amount == pfData.amount_gross
              //Verify the data received is valid
            ) {
              Order.findOne({
                m_payment_id: pfData.m_payment_id,
              })
                .then((oxo) => {
                  //Verify that the order hasn’t been processed already
                  if (!oxo) {
                    // loop through cart and groupBy storeId
                    var groupBy = function (xs, key) {
                      return xs.reduce(function (rv, x) {
                        (rv[x[key]] = rv[x[key]] || []).push(x);
                        return rv;
                      }, {});
                    };

                    // Group by Id
                    let grouped_id = groupBy(data.cart, "_id");
                    // new cart with merged product
                    let arr = [];
                    async.each(grouped_id, function (item, callback) {
                      if (item.length > 1) {
                        //merge the products then push to cart
                        let merged_product = {
                          amount: item[0].amount + item[1].amount,
                          category: item[0].category,
                          original_price: item[0].original_price,
                          productDescription: item[0].productDescription,
                          productName: item[0].productName,
                          productPrice: item[0].productPrice,
                          sale_type: item[0].sale_type,
                          storeId: item[0].storeId,
                          _id: item[0]._id,
                        };
                        arr.push(merged_product);
                      } else {
                        //push to array
                        arr.push({ ...item[0] });
                      }
                    });

                    // a loop that returns a new array with new property =  order_status
                    let new_cart = arr.map((product) => {
                      let proo = { ...product, order_status: "pending" };
                      return proo;
                    });

                    let grouped_order = groupBy(new_cart, "storeId");

                    // Process order
                    async.each(grouped_order, function (item, callback) {
                      if (item) {
                        const order = new Order({
                          m_payment_id: pfData.m_payment_id,
                          order_number: randomString(length, chars),
                          payment_status: "COMPLETE",
                          user_email: data.user_email,
                          storeId: item[0].storeId,
                          commit_date: null,
                          items: item,
                        });
                        order
                          .save()
                          .then((new_order) => {
                            let sum = 0;
                            for (let i = 0; i < new_order.items.length; i++) {
                              sum += parseInt(
                                new_order.items[i].productPrice *
                                  new_order.items[i].amount
                              );
                            } // TODO: check price formula

                            if (new_order && sum > 0) {
                              //generate receipt for each order
                              let receipt = new Order_Receipt({
                                m_payment_id: new_order.m_payment_id,
                                order_number: new_order.order_number,
                                payment_status: new_order.payment_status,
                                user_email: new_order.user_email,
                                store_id: new_order.storeId,
                                delivery_address: null,
                                items: new_order.items,
                                total_price: sum,
                                status: "Cartalist",
                              });

                              receipt
                                .save()
                                .then((new_r) => {
                                  console.log(new_r);
                                })
                                .catch((err) => console.log(err));
                            }
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }
                    });

                    // Update order to complete
                    data.status = "COMPLETE";
                    data.save();

                    //Save Payfast Receipt
                    const receipt = new Receipt({
                      m_payment_id: pfData.m_payment_id,
                      receipt: pfData,
                    });
                    receipt.save();

                    //Email the buyer confirming payment todo
                  } else {
                    console.log("order already exist");
                  }
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log(err));

        Temp_Order.find({
          m_payment_id: pfData.m_payment_id,
        })
          .then((order) => {
            let cart = order[0].cart;
            //Update related products
            async.each(cart, function (item, callback) {
              Product.find({ _id: item._id })
                .then((product) => {
                  let current_stock = product[0].in_stock;
                  let current_sold = cart[0].amount;
                  let remaining_stock = current_stock - current_sold;
                  Product.updateOne(
                    { _id: item._id },
                    { $set: { sold: current_sold } },
                    (err, result) => {
                      if (err) {
                        console.log({ err: "Unable to update competitor." });
                      } else {
                        console.log(result);
                      }
                    }
                  );
                  if (remaining_stock <= 0) {
                    Product.updateOne(
                      { _id: item._id },
                      { $set: { in_stock: 0 } },
                      (err, result) => {
                        if (err) {
                          console.log({ err: "Unable to update competitor." });
                        } else {
                          console.log(result);
                        }
                      }
                    );
                    Product.updateOne(
                      { _id: item._id },
                      { $set: { production_status: "OutOfStock" } },
                      (err, result) => {
                        if (err) {
                          console.log({ err: "Unable to update competitor." });
                        } else {
                          console.log(result);
                        }
                      }
                    );
                  } else {
                    Product.updateOne(
                      { _id: item._id },
                      { $set: { in_stock: remaining_stock } },
                      (err, result) => {
                        if (err) {
                          console.log({ err: "Unable to update competitor." });
                        } else {
                          console.log(result);
                        }
                      }
                    );
                  }
                })
                .catch((err) => console.log(err));
            });
          })
          .catch((err) => err);
      } else {
        console.log("order was not completed");
      }
    }
  } else {
    //record data
    console.log("iP address not matcing");
  }
});

module.exports = router;
