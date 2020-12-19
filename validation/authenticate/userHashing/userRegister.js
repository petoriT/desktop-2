const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const Store = require("../../../models/store/Store");
// Access Email Verification Method
const emailAuth = require("../emailAuth/verifyEmail");

module.exports = function userRegister(Model, userInput, req, res) {
  const newUser = new Model({
    email: userInput.email,
    user_agreement: userInput.user_agreement,
    password: userInput.password,
    profileImage: userInput.profileImage,
  });

  // Hash password before saving in database
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      const payload = {
        id: newUser.id,
        email: newUser.email,
        store_id: newUser.store_id,
      };

      // Create a token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 3901556926, // 100 years
        },
        (err, token) => {
          newUser.verified.token = token;
        }
      );
      newUser.password = hash;

      // admin is adding a user
      //check if the user is registering or being added
      if (userInput.role) {
        ///if user is being added, push data to their my_stores property

        newUser.storeOwner = true;
        newUser.my_stores.push({
          ...userInput,
          store_id: userInput.store_id,
        });
        Store.findOne({ _id: userInput.store_id }).then((store) => {
          store.users.push(userInput);
          store.save();
        });
      }

      //regisster new user
      newUser
        .save()
        .then((user) => {
          // Send Email

          emailAuth(userInput.password, user, req, res);
        })
        .catch((err) => console.log(err));
    });
  });
};
