const { db } = require("../database/database");
const { DataTypes } = require("sequelize");

const ProductCategory = db.define("product_category", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = ProductCategory;