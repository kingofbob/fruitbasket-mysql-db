const Sequelize = require("sequelize");
const schema = require('./schema');

const tableName = "promotionRules";
const modelName = "promotionRules";
const Op = Sequelize.Op;


module.exports = class PromotionRules extends Sequelize.Model {

    static init(sequelize, databaseName) {
        return super.init(schema(), {
            tableName,
            modelName,
            schema: databaseName,
            sequelize
        });
    }

    static associate(models) {
        this.myAssociation = this.belongsTo(models.promotion, { foreignKey: 'promotionId' });
        this.myAssociation = this.belongsTo(models.product, { foreignKey: 'productId' });
    }

}