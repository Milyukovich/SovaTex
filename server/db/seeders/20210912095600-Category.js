"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Наволочки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Простыни",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Полотенца",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
