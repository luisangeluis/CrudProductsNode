const { db } = require("../database/database");
const { DataTypes } = require('sequelize');

const productImage = db.define("productImage", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
})

module.exports = productImage;