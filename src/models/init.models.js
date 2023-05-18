const product = require("./product.model");
const  productCategory =require("./productCategory.model");
const productImage = require("./productImage.model");


const initModels = () => {
  //Category->Product
  productCategory.hasMany(product);
  product.belongsTo(productCategory);

  //Product->ProductImage
  product.hasMany(productImage);
  productImage.belongsTo(product);
}

module.exports = initModels;