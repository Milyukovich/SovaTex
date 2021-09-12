"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Комплект наволочек Roseto",
          price: 2200,
          composition: "Хлопок 100%",
          color: "Голубой",
          equipment: "Наволочка - 2 шт",
          weight: 165,
          dimensions: "70х70",
          categoryID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
