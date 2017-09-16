module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Users', [
      {
        id: '',
        firstName: "Alex",
        lastName: "Tickle",
        email: "alex@testing.com",
        password: 'password',
        createdAt: "2017-09-15 14:52:29",
        updatedAt: "2017-09-15 14:52:29"
      }
    ])
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Bevents', null, {})
};
