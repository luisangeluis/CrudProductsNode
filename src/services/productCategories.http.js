const productCategoriesControllers = require("../controllers/productCategories.controllers")

const getAll = (req,res) => {
  productCategoriesControllers.readAllProductCategories()
    .then(response => res.status(200).json({ items: response.length, response }))
    .catch(error => res.status(400).json({ message: error.message }));
}

module.exports={
  getAll
}