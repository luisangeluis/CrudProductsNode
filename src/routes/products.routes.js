//Dependencies
const router = require("express").Router();
//Middlewares
const productExists = require("../middlewares/productExists");
//Services
const productServices = require("../services/products.http");

router.route("/")
  .get(productServices.getAll)
  .post(productServices.post);

router.route("/:id")
  .get(productServices.getById)
  .put(productExists, productServices.update);

exports.router = router;