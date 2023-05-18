const router = require("express").Router();

const productCategoriesServices = require("../services/productCategories.http");

router.route("/")
  .get(productCategoriesServices.getAll);

exports.router = router;
