const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAdminRegisterInput(data) {
  let errors = {};

  // Check if data exists, if not declare empty string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.user_type = !isEmpty(data.user_type) ? data.user_type : "";
  data.role = !isEmpty(data.role) ? data.user_type : "";
  data.module_access = !isEmpty(data.module_access) ? data.module_access : "";

  // Email Validation
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.user_type)) {
    errors.user_type = "user_type field is required";
  }
  if (Validator.isEmpty(data.role)) {
    errors.role = "role field is required";
  }
  if (Validator.isEmpty(data.module_access)) {
    errors.module_access = "module_access field is required";
  }

  //Satinize input noise
  data.email = Validator.trim(data.email);
  data.email = Validator.escape(data.email);
  data.email = Validator.normalizeEmail(data.email);

  data.user_type = Validator.trim(data.user_type);
  data.user_type = Validator.escape(data.user_type);

  data.role = Validator.trim(data.role);
  data.role = Validator.escape(data.role);

  data.module_access = Validator.trim(data.module_access);
  data.module_access = Validator.escape(data.module_access);

  return { errors, isValid: isEmpty(errors) };
};
