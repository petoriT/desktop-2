const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePasswordInput(data) {
  let errors = {};
  // Check if data exists, if not declare empty string
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";

  // Password Validation
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Please confirm your Password!";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }

  //Satinize input noise
  //password
  data.password = Validator.trim(data.password);
  data.password = Validator.escape(data.password);

  return { errors, isValid: isEmpty(errors) };
};
