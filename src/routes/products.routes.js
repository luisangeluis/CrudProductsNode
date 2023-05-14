//Dependencies
const router = require("express").Router();
//Middlewares
const productExistMiddleware = require("../middlewares/productExist.middleware");
//Services
const productServices = require("../services/products.http");
const productsImagesServices = require("../services/productsImages.http");

router.route("/")
  .get(productServices.getAll)
  .post(productServices.post);

router.route("/:id/post-images")
  .post(productExistMiddleware, productsImagesServices.postImages);

router.route("/:id")
  .get(productServices.getById)
  .put(productExistMiddleware, productServices.update)
  .delete(productServices.remove)

exports.router = router;