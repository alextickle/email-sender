module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Users', [
      {
        id: '-KtximVGkLwYi9IuYYWU',
        firstName: 'Alex',
        lastName: 'Tickle',
        email: 'alex@testing.com',
        password: 'mkdecision',
        createdAt: '2017-09-17 14:52:29',
        updatedAt: '2017-09-17 14:52:29'
      }
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Bevents', null, {})
};
