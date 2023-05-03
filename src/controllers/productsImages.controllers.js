//Dependencies
const uploadImage = require("../utils/cloudinary");

const createImage = async (file) => {
  const response = await uploadImage(file.image.tempFilePath)

  console.log(response);
}

exports.default = {
  createImage
}