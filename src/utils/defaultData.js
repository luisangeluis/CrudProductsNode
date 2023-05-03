const Product = require("../models/product.model");
const productCategory = require("../models/productCategory.model");

const generateData = async () => {
  await productCategory.bulkCreate([
    { id: '6c4f7883-5b93-414a-a87d-d2b8aa9e968b', name: 'tecnology',status:'active' },
    { id: 'a6ad6dbb-1441-4a15-9b20-9717cd081ec5', name: 'sports',status:'active' },
    { id: 'be5093b4-3c1a-4288-bc72-ca4f6411ffd8', name: 'hogar',status:'active' }
  ], { validate: true })

  await Product.bulkCreate([
    {
      id: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
      name: "xbox",
      description: "Xbox console",
      brand: "xbox",
      price: 400.00,
      productCategoryId:"6c4f7883-5b93-414a-a87d-d2b8aa9e968b"
    },
    {
      id: "97006fe0-4a35-47f4-bfbf-fc962e5fe500",
      name: "refrigerator",
      description: "refrigerator 14''",
      brand: "mabe",
      price: 600.50,
      productCategoryId:"be5093b4-3c1a-4288-bc72-ca4f6411ffd8"

    },
    {
      id: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
      name: "drill",
      description: "drill",
      brand: "truper",
      price: 100.20,
      productCategoryId:"be5093b4-3c1a-4288-bc72-ca4f6411ffd8"

    },
    {
      id: "81d20e3f-c742-412e-be9f-7d0ad8c6faa5",
      name: "play station",
      description: "play station console",
      brand: "sony",
      price: 650.00,
      status:"suspended",
      productCategoryId:"6c4f7883-5b93-414a-a87d-d2b8aa9e968b"

    }
  ])
}

module.exports = generateData;