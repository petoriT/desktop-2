const express = require("express");
const async = require("async");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/users/keys");
const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck");
const router = express.Router();
// Load Product model
const Product = require("../../../models/category/Product");
const Store = require("../../../models/store/Store");
const Order = require("../../../models/store/Order");

// Prepare middleware
//const upload = multer({dest: 'uploads/images'})
const upload = require("../../../utils/image_middleware/multer");
const cloudinary = require("../../../utils/image_middleware/cloudinary");

// View Product
router.get("/view_all_products", (req, res) => {
  Product.find()
    .then((products) => {
      return res.json({ products: products });
    })
    .catch((err) => console.log(err));
});

//view speacial category
router.post("/view_segment_products", (req, res) => {
  let category = req.body.value;
  let signal = req.body.signal;
  Product.find()
    .then((products) => {
      if (signal == "category") {
        let p = products.filter((p) => {
          return p.category.category == category;
        });
        return res.json({ products: p });
      }

      if (signal == "top_sales") {
        let p = products.filter((p) => {
          return p.sold > 1;
        });
        return res.json({ products: p });
      }

      if (signal == "liked_products") {
        let p = products.filter((p) => {
          return p.likes.length > 0;
        });
        return res.json({ products: p });
      }

      if (signal == "recommended_products") {
        let p = products.filter((p) => {
          return p.license.length > 0;
        });
        return res.json({ products: p });
      }

      if (signal == "sales_products") {
        let p = products.filter((p) => {
          return p.sale == true;
        });
        return res.json({ products: p });
      }

      if (signal === "similar_products") {
        let p = products.filter((p) => {
          return (
            p.category.category == category.category &&
            p.category.sub_category ==
            category.sub_category /* &&
            p.category.product_type == category.product_type*/ &&
            p._id != category.product_id
          );
        });
        return res.json({ products: p });
      }
    })
    .catch((err) => console.log(err));
});

//update likes
router.post("/update_like", authCheck, (req, res, done) => {
  let user = req.authData;
  let product_id = req.body._id;
  Product.findOne({ _id: product_id })
    .then((p) => {
      //filter likes by id
      let like = p.likes.filter((like) => {
        return like == user.email;
      });
      if (like.length < 1) {
        //update the product likees
        Product.updateOne(
          { _id: product_id },
          { $push: { likes: user.email } }
        ).then((p) => {
          Product.findOne({ _id: product_id })
            .then((p) => {
              res.json({ product: p });
            })
            .catch((err) => {
              res.json({ err: err });
            });
        });
      } else {
        //update the product likees
        Product.updateOne(
          { _id: product_id },
          { $pull: { likes: user.email } },
          { multi: true }
        ).then((p) => {
          Product.findOne({ _id: product_id })
            .then((p) => {
              res.json({ product: p });
            })
            .catch((err) => {
              res.json({ err: err });
            });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/get_user_reviews", authCheck, async (req, res) => {
  let user = req.authData;
  let productreviews = []
  Product.find({ "ratings.email": user.email })
    .then((products) => {

      const ratingsloop = async () => {
        for await (const product of products) {
          for (const rating of product.ratings) {
            if (rating.email == user.email) {
              productreviews.push({ product: product, rating: rating })
            }
          }
        }
        return productreviews
      }

      ratingsloop().then(p => {
        if (p.length > 0) {
          res.json({ products_reviews: p });
        } else {
          res.json({ msg: "No products reviewed" });
        }
      })
    })
    .catch((err) => {
      res.json({ err: err });
    });
});

router.get("/get_user_liked_products", authCheck, (req, res) => {
  let user = req.authData;
  Product.find()
    .then((products) => {
      //search for products i liked
      let liked = products.filter((p) => {
        for (i = 0; i <= p.likes.length; i++) {
          return p.likes[i] == user.email;
        }
      });
      res.json({ products: liked });
    })
    .catch((err) => {
      res.json({ err: err });
    });
});

//update review
router.post("/update_review", authCheck, (req, res, done) => {
  let user = req.authData;
  let product_id = req.body._id;
  let rate = req.body.rate;
  //let comment = req.body.comment;
  Product.findOne({ _id: product_id }).then((p) => {
    //filter ratings by email
    let rating = p.ratings.filter((rating) => {
      return rating.email == user.email;
    });
    console.log(p)
    if (rating.length < 1) {
      //update the product ratings
      Product.updateOne(
        { _id: product_id },
        {
          $push: {
            ratings: {
              email: user.email,
              rate: rate,
              comment: req.body.comment,
            },
          },
        }
      ).then((p) => {
        Product.findOne({ _id: product_id })
          .then((p) => {
            res.json({ product: p });
          })
          .catch((err) => {
            res.json({ err: err });
          });
      });
    } else {
      console.log(p)
      res.json({ msg: "Sorry already reviewed the product", rating: rating });
    }
  });
});

// upload picture
router.post("/uploadImage", upload.array("image"), async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "Images");
  if (req.method === "POST") {
    const urls = [];
    const files = req.files;
    console.log(files)
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      console.log(newPath)
      if (urls.length > 0) {
        console.log("yessssss")
        console.log(urls)
        res.status(200).json({
          message: "uploaded successfully",
          data: urls,
        });
      } else {
        console.log(urls)
      }
      // delete static files from app // TODO:
      fs.unlinkSync(path);
    }

  } else {
    res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }
});

router.post("/delete_cloudinary_image", (req, res) => {
  let public_id = req.body.public_id;
  cloudinary.remover(public_id, res);
});

// Register Product
router.post("/createProduct", authCheck, (req, res) => {
  const cat = req.body;
  console.log(cat);
  Product.findOne({ name: cat.productName })
    .then((product) => {
      if (!product) {
        // get username and retrieve storeowner id

        const newProduct = new Product({
          //update store id
          storeId: cat.store_id,
          productName: cat.productName,
          category: cat.selectCategory,
          productDescription: cat.productDescription,
          productImage: cat.productImage,
          metaTags: cat.metaTags,
          features: cat.features,
          in_stock: cat.in_stock,
          bill_of_material: cat.bill_of_material,
          productPrice: cat.productPrice,
          modified_price: cat.productPrice,
        });
        newProduct.save().then((product) => {
          return res.json({ product: product });
        });
      } else {
        return res.json({ product: "Product exists" });
      }
    })
    .catch((err) => console.log(err));
});

router.post("/create_bulk_products", authCheck, (req, res) => {
  user = req.authData;
  data = req.body;
  Store.findOne({ _id: data.store_id }).then((store) => {
    async.each(data.csv, function (arr, callback) {
      if (arr) {
        let product = new Product({
          storeId: store._id,
          productName: arr[1],
          category: arr[3],
          productDescription: arr[2],
          productImage: arr[4],
          metaTags: arr[1],
          productPrice: arr[5],
          modified_price: arr[5],
        });
        product.save();
      }
    });
    return res.json({ msg: "bulk created" });
  });
});

//view store products
router.get("/view_store_products", authCheck, (req, res) => {
  const user = req.authData;
  console.log(user);
  Product.find({ storeId: user.store_id }).then((products) => {
    return res.json({ products: products });
  });
});
router.post("/view_vendor_products", authCheck, (req, res) => {
  const id = req.body.id;
  Product.find({ storeId: id }).then((products) => {
    return res.json({ products: products });
  });
});

router.post("/view_product", authCheck, (req, res) => {
  const id = req.body.id;
  Product.find({ _id: id }).then((product) => {
    return res.json({ product: product });
  });
});

// Update Product
router.post("/updateProduct", authCheck, (req, res) => {
  let data = req.body;
  Product.updateOne(
    { _id: data.product.product_id },
    {
      $set: {
        storeId: data.store_id,
        productName: data.product.productName,
        category: data.product.selectCategory,
        productDescription: data.product.productDescription,
        productImage: data.product.productImage,
        metaTags: data.product.metaTags,
        features: data.product.features,
        productPrice: data.product.productPrice,
        production_status: data.product.production_status,
        next_available_date: data.product.next_available_date,
        in_stock: data.product.in_stock,
        sold: data.product.sold,
      },
    }
  )
    .then((product) => {
      Product.findOne({ _id: data.product.product_id })
        .then((modifiedProduct) => {
          return res.json({ product: modifiedProduct });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

// Delete Product
router.post("/deleteProduct", authCheck, (req, res) => {
  Product.deleteOne({ _id: req.body.id }, (err) => {
    if (!err) {
      Product.find()
        .then((product) => {
          res.json({ product });
        })
        .catch((err) => console.log(err));
    } else {
      res.json({ msg: err });
    }
  });
});

module.exports = router;
