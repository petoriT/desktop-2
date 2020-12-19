const express = require("express");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");

const router = express.Router();

// Load input validation
const validateRegisterInput = require("../../../validation/authenticate/userValidation/register");
const validateLoginInput = require("../../../validation/authenticate/userValidation/login");
const validateAdminRegisterInput = require("../../../validation/authenticate/adminValidations/admin_userValidation");
const validateProfileUpdateInput = require("../../../validation/authenticate/userValidation/profile_updateValidate");

const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");

// Load User model
const User = require("../../../models/users/User");
const Store = require("../../../models/store/Store");

//Custom methods
const userToken = require("../../../validation/authenticate/checkMiddleware/userToken");
const userRegister = require("../../../validation/authenticate/userHashing/userRegister");

// Register Route
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    console.log(req.body);
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const userInput = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        userRegister(User, userInput, req, res);
      }
    })
    .catch((err) => console.log(err));
});

router.post("/admin_register", authCheck, (req, res) => {
  // Form validation

  const new_admin_email = req.body.email;
  const userInput = req.body;
  console.log(userInput)
  //inject store id into incoming data
  User.findOne({ email: new_admin_email }).then((user) => {
    if (user) {
      //if user exist, check if he's already admin of the store
      Store.findOne({ _id: userInput.store_id }).then((store) => {
        let exist = store.users.filter((user) => {
          return user.email == new_admin_email;
        });
        if (exist.length > 0) {
          //if user is already admin of the store
          res.json({ msg: "User is already one of your admins" });
        } else {
          //make sure the user is store owner
          if (!user.storeOwner) {
            user.storeOwner = true;
            user.store_id = userInput.store_id;
          }
          //push data into their my_stores property
          user.my_stores.push(userInput);
          user.save().then((saved_user) => {
            //then push data to store users
            store.users.push(userInput);
            store.save().then((store) => {
              res.json({ store: store, user: saved_user });
            }).catch(err => res.json({ msg: "Try again later", err: err }));
          }).catch(err => res.json({ msg: "Try again later", err: err }));
        }
      });
    } else {
      //register them and push data to my_stores
      res.json({ msg: "User does not exist, register user" });
    }
  }).catch(err => res.json({ msg: "User does not exist, register user", err: err }));
});

// Login Route
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email })
    .then((user) => {
      // Check if user exists and provide token
      const admin = keys.super;
      if (!user && password == admin.password && email == admin.email) {
        userToken(admin, password, res);
      } else {
        userToken(user, password, res);
      }
    })
    .catch((err) => console.log("user do not exists: ", err));
});

router.post("/update_user_details", authCheck, (req, res) => {
  /*const { errors, isValid } = validateProfileUpdateInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }*/
  let user = req.authData;
  let data = req.body;

  User.findOne({ email: user.email }).then((user) => {
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.address = data.address;
    user.save().then((person) => {
      res.json({ user: person });
    });
  });
});

module.exports = router;
