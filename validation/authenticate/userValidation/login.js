const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // Check if data exists, if not declare empty string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Email Validation
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password Validation
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  //Satinize input noise
  //email
  data.email = Validator.trim(data.email);
  data.email = Validator.escape(data.email);
  data.email = Validator.normalizeEmail(data.email);

  //password
  data.password = Validator.trim(data.password);
  data.password = Validator.escape(data.password);

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
