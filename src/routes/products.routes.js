//Dependencies
//Routes
const router = require("express").Router();
//Services
const productServices = require("../services/products.http");

router.route("/")
  .get(productServices.getAll)
  .post(productServices.post);

router.route("/:id")
  .get(productServices.getById)
  .put(productServices.update);

exports.router = router;