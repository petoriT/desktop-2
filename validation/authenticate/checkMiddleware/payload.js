const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");

module.exports = function createToken(user, res) {
  // User matched
  // Create JWT Payload
  const payload = {
    id: user.id,
    email: user.email,
    store_id: user.store_id
  };
  // Sign token
  jwt.sign(payload, keys.secretOrKey,{
      expiresIn: 31556926 // 1 year
  },
  (err, token) => {
    res.json({
      success: true,
      token: token,
      user: user
    });
  }
  );
}
