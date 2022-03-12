'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'notas',
    [
      {
        ra: "012345",
        nota: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "012345",
        nota: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "012345",
        nota: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "012345",
        nota: 4.75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "054321",
        nota: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "054321",
        nota: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "054321",
        nota: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "054321",
        nota: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('notas', null, {}),
};
