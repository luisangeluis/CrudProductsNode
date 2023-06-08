const fs = require('fs-extra');

const filterAllowedFiles = (files) => {
  const allowedExtensions = ['png', 'jpg', 'jpeg'];

  let allowedFiles = [];

  allowedFiles = files.filter((file, i) => {
    console.log({file});
    const extension = file.name.split('.').pop().toLowerCase();
    if (allowedExtensions.includes(extension) & file.size <= 9500000) {
      return file;
    } else {
      fs.unlink(file.tempFilePath);
    }
  })

  return allowedFiles;

}

exports.filterAllowedFiles = filterAllowedFiles;