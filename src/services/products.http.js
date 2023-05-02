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
        : res.status(404).json({ message:`The product with id: ${id} doesn't exist`})
    })
    .catch(error => res.status(400).json({ message: error.message }))
}

module.exports = {
  getAll,
  getById
}