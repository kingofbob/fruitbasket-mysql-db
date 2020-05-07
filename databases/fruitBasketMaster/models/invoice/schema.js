const Sequelize = require("sequelize");

module.exports = () => {
    return {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        paymentDate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
        subTotal: {
            type: Sequelize.DECIMAL(13,2),
            allowNull: false,
        },
    };
}