const bcrypt = require("bcryptjs");
const keys = require("../../../config/users/keys");

module.exports = function updatePassword(user, userInput, req, res) {
  // Update Password if user exists
  if (!user) {
    return res.status(400).json({ email: "Email does not exists" });
  } else {
    newPassword = userInput.password;

    // Salt Encrypt newPassword
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPassword, salt, (err, hash) => {
        if (err) throw err;
        // Let user password equal hashed password
        user.password = hash;
        // Save user with new hashed password
        user
          .save()
          .then((user) => {
            res.json({
              message: "Password succefully updated",
              user: user,
            });
          })
          .catch((err) => console.log(err));
      });
    });
  }
};
