"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(40),
      },
      email: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(10),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      role: {
        type: Sequelize.STRING(5),
        defaultValue: "user",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
