const Sequelize = require("sequelize");
const schema = require('./schema');

const tableName = "user";
const modelName = "user";
const Op = Sequelize.Op;


module.exports = class User extends Sequelize.Model {

    static init(sequelize, databaseName) {
        return super.init(schema(), {
            tableName,
            modelName,
            schema: databaseName,
            sequelize
        });
    }

    static associate(models) {
        this.myAssociation = this.hasMany(models.invoice, {
            foreignKey: 'userId',
            sourceKey: 'id'
        });

    }

}