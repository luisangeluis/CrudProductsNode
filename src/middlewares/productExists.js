const Products = require("../models/product.model");

const productExists = (req, res, next) => {
  const productId = req.params.id;

  Products.findOne({ where: { id: productId } })
    .then(response => {
      if (response) next()
      else return res.status(404).json({ message: `The product with id: ${productId} doesn't exist` })
    })
    .catch(error => {
      return res.status(400).json({ message: error.message });
    })
}

module.exports = productExists;