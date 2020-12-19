// Models
const User = require("../../../models/users/User");
const Store = require("../../../models/store/Store");

module.exports = function storeRegister(user, store, res) {
  // Update Store model
  const newStore = new Store({
    name: store.name,
    tag_line: store.tag_line,
    userEmail: user.email,
    logo: store.logo,
    storeEmail: store.email,
    phone: store.phone,
    out_bound_fee: store.out_bound_fee,
    delivery_free_places: store.free_delivery,
  });
  newStore
    .save()
    .then((store) => {
      // Update User -- set sstoreOwner to true
      User.findOne({ email: user.email })
        .then((user) => {
          user.storeOwner = true;
          if (!user.store_id) {
            user.store_id = store._id;
          }

          user
            .save()
            .then((updatedUser) => {
              res.json({
                message: "Store registered",
                store: store,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
