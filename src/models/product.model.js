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
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
})

module.exports=Product;