const Sequelize = require("sequelize");
const _ = require('lodash');
const mysql = require('promise-mysql');

const createDatabase = (databaseAccount, databaseName) => {
  if (!databaseAccount || !databaseName) return false;

  databaseAccount = JSON.parse(databaseAccount);

  return mysql.createConnection({
    user: _.get(databaseAccount, 'username'),
    password: _.get(databaseAccount, 'password'),
    host: _.get(databaseAccount, 'options.host'),
    port: _.get(databaseAccount, 'options.port'),
  }).then((connection) => {
    return connection.query(`CREATE DATABASE ${databaseName};`).then((results) => {
      return connection;
    }).catch((error) => {
      console.warn("Warning during creating database: ", error.message);
      return connection;
    })
  }).then((values) => {
    values.connection.end();
    return;
  })
}

const authSyncDatabase = async (database, options = {
  logging: false,
  force: false,
}) => {

  const sequelize = database.sequelize;
  sequelize.options.logging = options.logging || false;

  return Promise.resolve().then(() => {
    return createDatabase(process.env.databaseAccount, database.sequelize.config.database);
  }).then(() => {
    return sequelize.authenticate();
  }).then(() => {
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 0', {
      raw: true
    });
  }).then(() => {
    return sequelize.sync({
      force: options.force
    });
  }).then(() => {
    return sequelize;
  })

}

module.exports = {
  authSyncDatabase
};

//WHERE interests REGEXP 'sports|pub'