const fileUpload = require('express-fileupload');

const uploadImages = fileUpload({
  useTempFiles : true,
  tempFileDir : 'src/uploads'
})

module.exports = uploadImages;

