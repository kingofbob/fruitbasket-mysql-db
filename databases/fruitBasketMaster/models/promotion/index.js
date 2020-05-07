const Sequelize = require("sequelize");
const schema = require('./schema');

const tableName = "promotion";
const modelName = "promotion";
const Op = Sequelize.Op;


module.exports = class Promotion extends Sequelize.Model {

    static init(sequelize, databaseName) {
        return super.init(schema(), {
            tableName,
            modelName,
            schema: databaseName,
            sequelize
        });
    }

    static associate(models) {
        this.myAssociation = this.hasMany(models.promotionRules, {
            foreignKey: 'promotionId',
            sourceKey: 'id'
        });
    }

}