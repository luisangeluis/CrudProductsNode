//Dependencies
const uuid = require("uuid");
//Controllers
const ProductsImagesControllers = require("../controllers/productsImages.controllers");
//Controllers
const Products = require("../models/product.model");

const readAllProducts = async () => {
  const response = await Products.findAll({
    where: { status: "active" },
    attributes: ["id", "name", "description", "brand", "price", "status"]
  });

  return response;
}

const readProductById = async (id) => {
  const response = await Products.findOne({
    where: { id },
    attributes: ["id", "name", "description", "brand", "price", "status"]
  })

  return response;
}

const createProduct = async (data, file) => {
  try {
    const newProduct = await Products.create({
      ...data,
      id: uuid.v4()
    });

    // console.log(response);
    // console.log(file);
    if (file?.image) {
      console.log(file.image);
      await ProductsImagesControllers.createImage(newProduct.id,file);

    }


    return newProduct;
  } catch (error) {
    return error;
  }
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

const deleteProduct = async (productId) => {
  const del = "deleted";

  const response = await Products.update(
    { status: del },
    { where: { id: productId } }
  );

  return response;
}

module.exports = {
  readAllProducts,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct
}