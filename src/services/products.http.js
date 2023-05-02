const productsControllers = require("../controllers/products.controllers");

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

  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing data" })
  }

  if (!data.name || !data.description || !data.brand || !data.price) {
    return res.status(400).json({
      message: "At least these  fields must be completed",
      fields: {
        name: "string",
        description: "string",
        brand: "string",
        price: "number"
      }
    })
  }

  productsControllers.createProduct(data)
    .then(response => {
      return res.status(201).json({
        message: `Product createad successfully with id ${response.id}`,
        product: response
      })
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

const update = (req, res) => {

  //! TODO add a middleware before of update a product
  const productId = req.params.id;
  const data = req.body;
  console.log({ productId });

  const { id, ...restOfData } = data;

  if (!Object.keys(restOfData).length) return res.status(400).json({ message: "Missing data" })

  productsControllers.updateProduct(productId, restOfData)
    .then(response => {
      console.log({ response });
      if (response[0])
        return res.status(200).json({ message: `Product with id: ${productId} edited successfully` })
      else
        return res.status(400).json({ message: `Please enter valid data` })
    })
    .catch(error => res.status(400).json({ message: error.message }))

}

module.exports = {
  getAll,
  getById,
  post,
  update
}