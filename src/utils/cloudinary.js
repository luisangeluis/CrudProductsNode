const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const uploadImage = async (filePath) => await cloudinary.uploader.upload(filePath, { folder: "images-product" });

const deleteImage = async (publicId) => await cloudinary.uploader.destroy(publicId);


module.exports = {
  uploadImage,
  deleteImage
};
