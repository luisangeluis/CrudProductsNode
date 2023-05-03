const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
});

const uploadImage = async (filePath) => {
  await cloudinary.uploader.upload(filePath);
}


module.exports = {
  uploadImage
}