const Sequelize = require("sequelize");
const schema = require('./schema');

const tableName = "product";
const modelName = "product";
const Op = Sequelize.Op;


module.exports = class Product extends Sequelize.Model {

    static init(sequelize, databaseName) {
        return super.init(schema(), {
            tableName,
            modelName,
            schema: databaseName,
            sequelize
        });
    }
    
    static associate(models) {
        this.myAssociation = this.hasMany(models.promotionRules);
    }

}