//Dependencies
const uuid = require("uuid");
//Controllers
const Products = require("../models/product.model");
const Product = require("../models/product.model");

const readAllProducts = async () => {
  const response = await Products.findAll({
    attributes: ["id", "name", "description", "brand", "price"]
  });

  return response;
}

const readProductById = async (id) => {
  const response = await Products.findOne({
    where: { id },
    attributes: ["id", "name", "description", "brand", "price"]
  })

  return response;
}

const createProduct = async (data) => {
  const response = await Products.create({
    ...data,
    id: uuid.v4()
  });

  return response;
}

const updateProduct = async (productId, data) => {
  const { id, ...restOfData } = data;

  //Update always returns an array
  const response = await Products.update(
    restOfData,
    { where: { id: productId } }
  );

  return response;
}

module.exports = {
  readAllProducts,
  readProductById,
  createProduct,
  updateProduct
}