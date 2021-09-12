"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING(40),
      },
      email: {
        type: DataTypes.STRING(255),
        unique: true,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING(10),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      role: {
        type: DataTypes.STRING(5),
        defaultValue: "user",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
