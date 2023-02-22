'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [{
            
              guid: "007915d5-9ba7-420b-a747-9f9ad534ffb8",
              fullName: "Jeevan",
              email: "testtesttestmail@mail.com",
              password: "password",
              role:"123",
              status: "123",
              createdAt:new Date(),
              updatedAt:new Date()
        }]);
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
      }
}