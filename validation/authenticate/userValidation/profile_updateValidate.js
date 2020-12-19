const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProfileUpdateInput(data) {
  let errors = {};

  // Check if data exists, if not declare empty string
  data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
  data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = "first_name is required";
  }

  if (Validator.isEmpty(data.user_type)) {
    errors.last_name = "last_name is required";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "address is required";
  }

  //Satinize input noise
  //password
  data.first_name = Validator.trim(data.first_name);
  data.first_name = Validator.escape(data.first_name);

  data.last_name = Validator.trim(data.last_name);
  data.last_name = Validator.escape(data.last_name);

  data.address = Validator.trim(data.address);
  data.address = Validator.escape(data.address);

  return { errors, isValid: isEmpty(errors) };
};
