const productCategories = require("../models/productCategory.model");


const readAllProductCategories=async()=>{
  const response = await productCategories.findAll({
    attributes:["id","name"]
  });

  return response;
}

module.exports={
  readAllProductCategories
}