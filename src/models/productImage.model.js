const { db } = require("../database/database");
const { DataTypes } = require('sequelize');

const productImage = db.define("product_image", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    field:"product_id"
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