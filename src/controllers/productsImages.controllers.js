//Dependencies
const uploadImage = require("../utils/cloudinary");

const createImage = async (productId,file) => {
  // const response = await uploadImage(file.image.tempFilePath)
  // console.log(response);
  try{
    const result = await uploadImage(file.image.tempFilePath);
    
  }catch(error){
    return error;
  }
}

exports.default = {
  createImage
}