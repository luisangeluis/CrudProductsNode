//Dependencies
const uuid = require("uuid");
//Controllers
const Products = require("../models/product.model");

const readAllProducts = async () => {
  const response = await Products.findAll({
    attributes: ["id", "name", "description", "brand", "price"]
  });

  return response;
}

const readProductById= async (id)=>{
  const response = await Products.findOne({
    where:{id},
    attributes: ["id", "name", "description", "brand", "price"]
  })

  return response;
}

module.exports = {
  readAllProducts,
  readProductById
}