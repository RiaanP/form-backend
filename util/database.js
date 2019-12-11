const Sequelize = require('sequelize');



// Sequelize database dialect to connect to datbase form
const sequelize = new Sequelize('form', 'root', 'samuel123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;