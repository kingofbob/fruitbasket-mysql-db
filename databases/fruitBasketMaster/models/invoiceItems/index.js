const Sequelize = require("sequelize");
const schema = require('./schema');

const tableName = "invoiceItems";
const modelName = "invoiceItems";
const Op = Sequelize.Op;


module.exports = class InvoiceItems extends Sequelize.Model {

    static init(sequelize, databaseName) {
        return super.init(schema(), {
            tableName,
            modelName,
            schema: databaseName,
            sequelize
        });
    }

    static associate(models) {
        this.myAssociation = this.belongsTo(models.invoice, { foreignKey: 'invoiceId' });
    }

}