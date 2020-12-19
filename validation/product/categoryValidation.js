const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateCategoryInput(data) {

  let errors = {};
  // Check if data exists, if not declare empty string
  data.categoryName = !isEmpty(data.categoryName) ? data.categoryName : "";
  data.categoryDescription = !isEmpty(data.categoryDescription) ? data.categoryDescription : "";
  data.categoryMetaTag = !isEmpty(data.categoryMetaTag) ? data.categoryMetaTag : "";
  if(data.properties){
    data.properties = data.properties
  }else{
    data.properties = ""
  }

  // Name Validation
  if (Validator.isEmpty(data.categoryName)) {
    errors.categoryName = "Category Name field is required";
  }

  // Description Validation
  if (Validator.isEmpty(data.categoryDescription)) {
    errors.categoryDescription = "Description field is required";
  }

  // MetaTag Validation
  if (Validator.isEmpty(data.categoryMetaTag)) {
    errors.categoryMetaTag = "MetaTag field is required";
  }

  // Property Validation
  if (Validator.isEmpty(data.properties)) {
    errors.properties = "Properties field is required";
  }

}
