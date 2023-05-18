const { db } = require("../database/database");
const { DataTypes } = require('sequelize');

const Product = db.define("product", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active" //active,suspended,deleted
  },
  productCategoryId:{
    type:DataTypes.UUID,
    allowNull:false,
    field:"product_category_id"
  }
})

module.exports = Product;