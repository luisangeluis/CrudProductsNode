//Dependencies
const uuid = require("uuid");
//Controllers
const Products = require("../models/product.model");

const readAllProducts = async () => {
  const response = await Products.findAll({
    attributes: ["id", "name", "description", "price"]
  });

  return response;
}

module.exports = {  
  readAllProducts
}