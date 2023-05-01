//Dependencies
//Routes
const router = require("express").Router();
//Services
const productServices = require("../services/products.http");

router.route("/")
  .get(productServices.getAll);

exports.router = router;