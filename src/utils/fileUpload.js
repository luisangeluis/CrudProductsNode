const fileUpload = require('express-fileupload');
const fs = require('fs-extra')

const uploadImages = fileUpload({
  useTempFiles: true,
  tempFileDir: 'src/uploads',
  limits: { fileSize: 9 * 1024 * 1024 },
  abortOnLimit: true
  
})

module.exports = uploadImages;

