//Dependencies
const router = require("express").Router();
//Middlewares
const productExistMiddleware = require("../middlewares/productExist.middleware");
//Services
const productServices = require("../services/products.http");

router.route("/")
  .get(productServices.getAll)
  .post(productServices.post);

router.route("/:id")
  .get(productServices.getById)
  .put(productExistMiddleware, productServices.update)
  .delete(productServices.remove)

exports.router = router;