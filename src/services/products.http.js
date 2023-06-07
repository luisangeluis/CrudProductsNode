const productsControllers = require("../controllers/products.controllers");
const fs = require('fs-extra');
const { filterAllowedFiles } = require("../utils/filterAllowedFiles");


const getAll = (req, res) => {
  productsControllers.readAllProducts()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ message: error.message }))
}

const getById = (req, res) => {
  const id = req.params.id;

  productsControllers.readProductById(id)
    .then(response => {
      response
        ? res.status(200).json(response)
        : res.status(404).json({ message: `The product with id: ${id} doesn't exist` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const post = (req, res) => {
  const data = req.body;
  let file = {};

  if (!Object.keys(data).length) res.status(400).json({ message: "Missing data" })

  if (!data.name || !data.description || !data.brand || !data.price || !data.productCategoryId) {
    return res.status(400).json({
      message: "At least these  fields must be completed",
      fields: {
        name: "string",
        description: "string",
        brand: "string",
        price: "number",
        productCategoryId: "string"
      }
    })
  }

  let allowedFiles = [];

  if (req.files?.image) {
    file = req.files.image;

    if (!file.length) file = [file];

    allowedFiles = filterAllowedFiles(file);
  }

  productsControllers.createProduct(data, allowedFiles)
    .then(response => {
      return res.status(201).json({
        message: `Product createad successfully with id ${response.id}`,
        product: response
      })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const update = (req, res) => {
  const productId = req.params.id;
  const data = req.body;
  let file = {}

  const { id, ...restOfData } = data;

  if (!Object.keys(restOfData).length) return res.status(400).json({ message: "Missing data" });

  let allowedFiles = [];

  if (req.files?.image) {
    // file = req.files;
    file = req.files.image;

    if (!file.length) file = [file];

    allowedFiles = filterAllowedFiles(file);
  }

  productsControllers.updateProduct(productId, restOfData, allowedFiles)
    .then(response => {
      console.log({ response });
      if (response[0])
        return res.status(200).json({ message: `Product with id: ${productId} edited successfully` })
      else
        return res.status(400).json({ message: `Please enter valid data` })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const remove = (req, res) => {
  const productId = req.params.id;

  productsControllers.deleteProduct(productId)
    .then(response =>
      response
        ? res.status(204).json()
        : res.status(404).json({ message: `Product with id:${productId} doesn't exist` })
    )
    .catch(error => res.status(400).json({ message: error.message }));
}

module.exports = {
  getAll,
  getById,
  post,
  update,
  remove
}