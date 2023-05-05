//Dependencies
const uuid = require("uuid");
const fs = require('fs-extra')
//Utils
const cloudinary = require("../utils/cloudinary");
//Models
const ProductsImages = require("../models/productImage.model");

const createImage = async (productId, file) => {
  try {
    const result = await cloudinary.uploadImage(file.image.tempFilePath);

    if (result) {
      const response = await ProductsImages.create({
        productId,
        imageUrl: result.secure_url,
        cloudinaryId: result.public_id,
        id: uuid.v4()
      });

      await fs.unlink(file.image.tempFilePath);
    }

    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {
  createImage
}