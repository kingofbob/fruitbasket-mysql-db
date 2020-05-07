const Sequelize = require("sequelize");
const schema = require('./schema');

const tableName = "invoice";
const modelName = "invoice";
const Op = Sequelize.Op;


module.exports = class Invoice extends Sequelize.Model {

    static init(sequelize, databaseName) {
        return super.init(schema(), {
            tableName,
            modelName,
            schema: databaseName,
            sequelize
        });
    }

    static associate(models) {
        this.myAssociation = this.hasMany(models.invoiceItems, {
            foreignKey: 'invoiceId',
            sourceKey: 'id'
        });

        this.myAssociation = this.belongsTo(models.user, { foreignKey: 'userId' });
    }

}