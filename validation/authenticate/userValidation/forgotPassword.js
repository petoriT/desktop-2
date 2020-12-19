const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEmailInput(data) {
  let errors = {};

  // Check if data exists, if not declare empty string
  data.email = !isEmpty(data.email) ? data.email : "";

  // Email Validation
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Satinize input noise
  //email
  data.email = Validator.trim(data.email);
  data.email = Validator.escape(data.email);
  data.email = Validator.normalizeEmail(data.email);

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
