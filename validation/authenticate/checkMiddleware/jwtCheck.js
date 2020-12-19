const jwt = require("jsonwebtoken");
const jwtSimple = require("jwt-simple");
const keys = require("../../../config/users/keys");
const User = require("../../../models/users/Google_auth");

// Check if the user exists and Authenticate
module.exports = authCheck = (req, res, next) => {
  // Get auth header value(token)
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const decryptedToken = jwtSimple.decode(bearerToken, keys.secretOrKey);

    // Search Database else Decrypt JWT
    User.findOne({ googleId: decryptedToken.id })
      .then((user) => {
        if (user) {
          req.googleUser = user; // TODO: remove later //one
          req.authData = user; //And the same
          next();
        } else {
          req.token = bearerToken;
          jwt.verify(req.token, keys.secretOrKey, (err, authData) => {
            if (err) {
              res.status(404).json({ message: "You are not authenticated!" });
            } else {
              req.authData = authData;
            }
          });
          next();
        }
      })
      .catch((err) =>
        res.json({
          message: "Fobbiden",
          error: err,
        })
      );
  } else {
    res.json({
      message: "Fobbiden",
      error: err,
    });
  }
};
