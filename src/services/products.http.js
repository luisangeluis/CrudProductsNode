const productsControllers = require("../controllers/products.controllers");

const getAll = (req, res) => {
  productsControllers.readAllProducts()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ message: error.message }))
}

module.exports = {
  getAll
}