'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'alunos',
    [
      {
        ra: "012345",
        name: 'Roberta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ra: "054321",
        name: 'Paulo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('alunos', null, {}),
};
