const { Sequelize } = require('sequelize');

//Replace this with your own credentials
const sequelize = new Sequelize(
  'db_movie',
  'postgres',
  'admin',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

module.exports = sequelize;
