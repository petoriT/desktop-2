const express = require("express");

const router = express.Router();

// Load input validation
const validateRegisterStore = require("../../../validation/authenticate/storeValidation/register");

// Authenticate user middleware
const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");
const storeRegister = require("../../../validation/authenticate/storeMiddleware/storeRegister");

// Models
const Store = require("../../../models/store/Store");
const User = require("../../../models/users/User");


router.post("/activate_free_trial", authCheck, (req, res) => {
  let data = req.body.data

  Store.findOne({ _id: data.store_id }).then(store => {
    let trial = {
      end_date: data.end_date,
      allowed_products: data.allowed_products,
    }
    store.free_trial = trial
    store.save().then(activated => {
      res.json({ store: activated })
    })
  })
})

//get all stores
router.get("/get_vendor_stores", authCheck, (req, res) => {
  const user = req.authData;
  let stores = [];
  User.findOne({ email: user.email })
    .then((user) => {
      user.my_stores.forEach((store) => {
        Store.findOne({ _id: store.store_id })
          .then((st) => {
            stores.push(st);
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
  setTimeout(() => {
    console.log(stores);
    res.json({ stores: stores });
  }, 3000);
});

// Register Route
router.post("/register", authCheck, (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterStore(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Logged in with passport strategy
  if (req.googleUser) {
    return null;
    // logged in with token method
  } else if (req.authData) {
    const user = req.authData;
    const store = req.body;

    // Register store
    storeRegister(user, store, res);
  } else {
    res.json({ message: "Fobbiden" });
  }
});

router.post("/store_profile", authCheck, (req, res) => {
  let id = req.body._id;
  Store.findOne({ _id: id }).then((store) => {
    res.json({ store: store });
  });
});

router.post("/remove_admin", authCheck, (req, res) => {
  const user = req.authData;
  const data = req.body;

  Store.updateOne(
    //update store
    { _id: data.store_id },
    { $pull: { users: { email: data.email } } },
    { multi: true },
    function (err, d) {
      //update user
      User.updateOne(
        { email: data.email },
        { $pull: { my_stores: { email: data.email } } },
        { multi: true },
        function (err, a) {
          //check user my_stores length, if 0 update storeOwner to false and remove store id
          User.findOne({ email: data.email }).then(user => {
            let remaining_stores = user.my_stores.filter(res => {
              return res.store_id !== data.store_id
            })
            if (remaining_stores < 1) {
              user.storeOwner = false
              user.store_id = null
            } else {
              user.store_id = remaining_stores[0].store_id
            }
            user.save().then(updated_user => {
              res.json({ msg: "deleted" });
            })

          }).catch(err => console.log(err))
        }
      );



    }
  );
});

router.post("/update_return_policy", authCheck, (req, res) => {
  let return_policy = req.body.return_policy;

  Store.findOne({ _id: req.body.store_id }).then((store) => {
    store.return_policy = return_policy;
    store.save().then((store) => {
      res.json({ store: store });
    });
  });
});

router.post("/update_admin", authCheck, (req, res) => {
  const user = req.authData;
  const data = req.body;
  let updated_admin = {};
  console.log(data)
  Store.findOne({ _id: data.store_id }).then(store => {
    store.users = data.users
    store.save().then(update_store => {
      res.json({ msg: "admin_updated", store: store })
    }).catch(err => console.log(err))
  }).catch(err => console.log(err))
});

// Register Route
router.post("/profiling", authCheck, (req, res) => {
  // Form validation
  //const { errors, isValid } = validateRegisterStore(req.body);
  // Check validation
  /*if (!isValid) {
    return res.status(400).json(errors);
  }*/
  // Logged in with passport strategy
  if (req.googleUser) {
    return null;
    // logged in with token method
  } else if (req.authData) {
    const user = req.authData;
    const delivery = req.body.delivery;
    const comp_reg_num = req.body.comp_reg_num;
    // Store Update
    Store.findOne({ userEmail: user.email })
      .sort({ field: "asc", _id: -1 })
      .then((store) => {
        console.log("one: ", store);

        store.delivery = delivery;
        store.comp_reg_num = comp_reg_num;
        console.log("one: ", store);
        store.users.push({
          email: store.userEmail,
          user_type: "Main",
          role: "Main",
          module_access: "All",
        });
        store
          .save()
          .then((updated) => {
            User.findOne({ email: user.email })
              .then((user) => {
                let new_st = {
                  email: updated.userEmail,
                  user_type: "Main",
                  role: "Main",
                  module_access: "All",
                  store_id: store._id,
                };
                console.log(store);
                user.my_stores.push(new_st);
                console.log("user", user);
                user
                  .save()
                  .then((user) => {
                    res.json({ user: user, store: store });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => console.log(err));
      });
  } else {
    res.json({ message: "Fobbiden" });
  }
});

module.exports = router;
