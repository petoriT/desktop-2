const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");

//Access Passport Config
const googleAuth = require("./config/users/google-auth");
const facebookAuth = require("./config/users/facebook-auth");

//Access Pages for Routing
const users = require("./routes/api/auth/user");
const activity = require("./routes/api/store/activity");
const notification = require("./routes/api/user/notifications");
const passportRoutes = require("./routes/api/auth/user_oauth");
const verifyRoute = require("./routes/api/auth/verify");
const forgotPasswordRoute = require("./routes/api/auth/forgotPassword");
const profileRoutes = require("./routes/api/user/profile");
const storeRegister = require("./routes/api/store/auth");
const category = require("./routes/api/store/category");
const product = require("./routes/api/store/product");
const payfast = require("./routes/api/payments/payfast");
const receipt = require("./routes/api/payments/receipt");
const voucher = require("./routes/api/store/voucher");
const email = require("./routes/api/emails/email");
const keys = require("./config/users/keys");

const app = express();

app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());
// For Testing
app.use(bodyParser.urlencoded({ extended: true }));

// Encrypt and set up cookie-session
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //day in ms
    keys: [keys.session.cookieKey],
  })
);

// Passport initialize and use session-cookies
app.use(passport.initialize());
app.use(passport.session());

// Passport jwt strategy initialize
require("./config/users/passport")(passport);

// Point static path to public
app.use(express.static("./client/www"));

/* DB Config */
// Access mongoURI
const db = keys.mongoURI;

// Connect to MongoDB via mlab
mongoose
  .connect(db, { useNewUrlParser: true, dbName: "afrob" })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => {
    console.log(err, "Check your internet connection!");
  });

// API Routes
app.use("/api/user", users);
app.use("/api/activities", activity);
app.use("/api/notifications", notification);
app.use("/api/oauth", passportRoutes);
app.use("/api/verify", verifyRoute);
app.use("/api/forgotPassword", forgotPasswordRoute);
app.use("/api/profile", profileRoutes);
app.use("/api/store", storeRegister);
app.use("/api/category", category);
app.use("/api/product", product);
app.use("/api/payfast", payfast);
app.use("/api/voucher", voucher);
app.use("/api/receipt", receipt);
app.use("/api/emails", email);

// Listening to port
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/www"));
}
app.listen(port, () =>
  console.log(`Server up and running.. on port ${port} !`)
);
