const Sequelize = require("sequelize");

const databaseAccount = JSON.parse(process.env.databaseAccount);
const databaseName = "fruit_basket_master"

console.info(`new instance of sequelize with config - dbname: ${databaseName} - username: ${databaseAccount.username} - dialect: ${databaseAccount.options.dialect}`);
let options = databaseAccount.options;

let sequelize = new Sequelize(
    databaseName,
    databaseAccount.username,
    databaseAccount.password,
    options);

sequelize.dialect.supports.schemas = true; //this to prevent schema name in table

const models = {
    user: require("./models/user").init(sequelize, databaseName),
    product: require("./models/product").init(sequelize, databaseName),
    promotion: require("./models/promotion").init(sequelize, databaseName),
    promotionRules: require("./models/promotionRules").init(sequelize, databaseName),
    invoice: require("./models/invoice").init(sequelize, databaseName),
    invoiceItems: require("./models/invoiceItems").init(sequelize, databaseName),
};

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize
};

module.exports = db;