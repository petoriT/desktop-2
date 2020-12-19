const express = require("express");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");

const router = express.Router();

// Load input validation
const validateCategoryInput = require("../../../validation/product/categoryValidation");

// Load Category model
const Category = require("../../../models/category/Category");

// Register Category
router.post("/createCategory", (req, res) => {
  const cat = req.body;

  Category.findOne({ name: cat.categoryName })
    .then((category) => {
      if (category) {
        return res.json({ category: "Category exists" });
      } else {
        const newCategory = new Category({
          categoryName: cat.categoryName,
          description: cat.categoryDescription,
          units: cat.categoryUnits,
          unitOfMeasure: cat.categoryUnitsMeasure,
          properties: cat.properties,
        });
        newCategory.save().then((category) => {
          return res.json({ category: category });
        });
      }
    })
    .catch((err) => console.log(err));
});

// View Category
router.get("/viewCategory", (req, res) => {
  Category.find()
    .then((category) => {
      return res.json({ category: category });
    })
    .catch((err) => console.log(err));
});

// Update Category
router.post("/updateCategory", (req, res) => {
  Category.updateOne(
    { _id: req.body.category_id },
    {
      $set: {
        categoryName: req.body.categoryName,
        units: req.body.categoryUnits,
        unitOfMeasure: req.body.categoryUnitsMeasure,
        description: req.body.categoryDescription,
        properties: req.body.properties,
      },
    }
  )
    .then((category) => {
      return res.json({ category: category });
    })
    .catch((err) => console.log(err));
});

// Delete Category
router.get("/deleteCategory", (req, res) => {
  /*Category.deleteOne({ _id: req.body.id }).then((category) => {
    return res.json({ category: category });
  });*/
  /*Category.update(
    { _id: "5f077e9226af71d81982796b" },
    { $pull: { list: { Categories: "" } } },
    { multi: true }
  );
  console.log("deleted");*/
});

module.exports = router;
