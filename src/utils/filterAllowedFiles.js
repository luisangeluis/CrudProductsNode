const fs = require('fs-extra');

const filterAllowedFiles = (files) => {
  const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif'];

  let allowedFiles = [];

  allowedFiles = files.filter((file, i) => {
    const extension = file.name.split('.').pop().toLowerCase();
    if (allowedExtensions.includes(extension)) {
      return file;
    } else {
      fs.unlink(file.tempFilePath);
    }
  })

  return allowedFiles;

}

exports.filterAllowedFiles = filterAllowedFiles;