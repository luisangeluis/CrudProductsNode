//Dependencies
const router = require("express").Router();
//Middlewares
const uploadImages = require("../utils/fileUpload");
const productExistMiddleware = require("../middlewares/productExist.middleware");
//Services
const productServices = require("../services/products.http");
const productsImagesServices = require("../services/productsImages.http");

router.route("/")
  .get(productServices.getAll)
  .post(uploadImages, productServices.post);

router.route("/:id/images")
  .post(productExistMiddleware, productsImagesServices.postImages)
  .delete(productExistMiddleware, productsImagesServices.deleteImage);

router.route("/:id")
  .get(productServices.getById)
  .put(productExistMiddleware,uploadImages, productServices.update)
  .delete(productServices.remove)

exports.router = router;