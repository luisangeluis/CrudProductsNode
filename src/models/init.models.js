const product = require("./product.model");
const  productCategory =require("./productCategory.model");


const initModels = () => {
  //productCategory->product
  productCategory.hasMany(product);
  product.belongsTo(productCategory);

}

module.exports = initModels;