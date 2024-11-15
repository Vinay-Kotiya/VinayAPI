const express = require("express");
const router = express.Router();

//getting data from ../controllers/products
const {
  getAllProducts,
  getAllProductsTesting,
} = require("../controllers/products");

//setting routes
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;
