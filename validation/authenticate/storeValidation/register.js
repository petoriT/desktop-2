const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {

  let errors = {};

  // Check if data exists, if not declare empty string
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  // Name Validation
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Email Validation
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Phone Validation
  if (Validator.isEmpty(data.email)) {
    errors.phone = "phone field is required";
  }

  return {errors, isValid: isEmpty(errors)};

}
