"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: "categoryID" });
    }
  }
  Product.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      vendorCode: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      composition: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      equipment: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      weight: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      dimensions: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      imagePath: {
        type: DataTypes.TEXT,
      },
      categoryID: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
