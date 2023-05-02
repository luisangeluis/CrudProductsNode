const Products = require("../models/product.model");

const generateData = async () => {
  await Products.bulkCreate([
    {
      id: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
      name: "xbox",
      description: "Xbox console",
      brand: "xbox",
      price: 400.00
    },
    {
      id: "97006fe0-4a35-47f4-bfbf-fc962e5fe500",
      name: "refrigerator",
      description: "refrigerator 14''",
      brand: "mabe",
      price: 600.50
    },
    {
      id: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
      name: "drill",
      description: "drill",
      brand: "truper",
      price: 100.20
    },
    {
      id: "81d20e3f-c742-412e-be9f-7d0ad8c6faa5",
      name: "play station",
      description: "play station console",
      brand: "sony",
      price: 650.00,
      status:"suspended"
    }
  ])
}

module.exports = generateData;