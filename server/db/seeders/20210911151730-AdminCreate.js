"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "gabidov05@gmail.com",
          phone: "9180298214",
          password: "1",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User",
          email: "gabidov31@mail.ru",
          phone: "9180298213",
          password: "1",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
