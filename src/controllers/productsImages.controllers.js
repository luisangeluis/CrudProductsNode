//Dependencies
const uuid = require("uuid");
const fs = require('fs-extra')
//Utils
const cloudinary = require("../utils/cloudinary");
//Models
const ProductsImages = require("../models/productImage.model");

const createImage = async (productId, image) => {
  try {
    const result = await cloudinary.uploadImage(image.tempFilePath);

    const response = await ProductsImages.create({
      productId,
      imageUrl: result.secure_url,
      cloudinaryId: result.public_id,
      id: uuid.v4()
    });

    await fs.unlink(image.tempFilePath);

    return response;
  } catch (error) {
    return error;
  }
}

const createImages = async (productId, images) => {
  try {
    const promises = await images.map((image) => {
      return createImage(productId, image);
    })
    const response = await Promise.all(promises);
    // console.log("holas");

    return response;
  } catch (error) {
    return error;
  }
}

const deleteImage = async (productId, cloudinaryId) => {
  try {
    await cloudinary.deleteImage(cloudinaryId)

    const response = ProductsImages.destroy({
      where: {
        productId,
        cloudinaryId
      }
    })

    return response;
  } catch (error) {
    return error;
  }
}

//Delete all images of any product
const deleteAllImages = async (productId) => {
  try {
    const cloudImages = await ProductsImages.findAll({
      where: { productId },
      attributes: ["cloudinaryId"]
    })
    // console.log(cloudImages);
    cloudImages.map(async (image) => cloudinary.deleteImage(image.cloudinaryId))
    //? Destroy devuelve 0 o 1 como respuesta
    const response = await ProductsImages.destroy({ where: { productId } })
    // console.log({ response });
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {
  createImage,
  createImages,
  deleteImage,
  deleteAllImages
}