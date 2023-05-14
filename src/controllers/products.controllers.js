//Dependencies
const uuid = require("uuid");
//Controllers
const ProductsImagesControllers = require("../controllers/productsImages.controllers");
//Models
const Products = require("../models/product.model");
const ProductsImages = require("../models/productImage.model");

const readAllProducts = async () => {
  const response = await Products.findAll({
    where: { status: "active" },
    attributes: ["id", "name", "description", "brand", "price", "status"],
    include: {
      model: ProductsImages,
      attributes: ["id", "imageUrl",]
    }
  });

  return response;
}

const readProductById = async (id) => {
  const response = await Products.findOne({
    where: { id },
    attributes: ["id", "name", "description", "brand", "price", "status"],
    include:
    {
      model: ProductsImages,
      attributes: ["id", "imageUrl",]
    }
  })

  return response;
}

const createProduct = async (data, file) => {
  try {
    const newProduct = await Products.create({
      ...data,
      id: uuid.v4()
    });

    if (file?.image) {
      console.log(file.image);

      file.image.length
        ? await ProductsImagesControllers.createImages(newProduct.id, file.image)
        : await ProductsImagesControllers.createImage(newProduct.id, file.image);
    }

    return newProduct;
  } catch (error) {
    return error;
  }
}

const updateProduct = async (productId, data, file) => {
  const { id, ...restOfData } = data;

  //Update always returns an array
  const response = await Products.update(
    restOfData,
    { where: { id: productId } }
  );

  return response;
}

const deleteProduct = async (productId) => {
  try {
    const del = "deleted";

    await ProductsImagesControllers.deleteAllImages(productId);

    const response = await Products.update(
      { status: del },
      { where: { id: productId } }
    );

    // console.log({ response });

    return response;
  } catch (error) {
    return error;
  }
}

module.exports = {
  readAllProducts,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct
}