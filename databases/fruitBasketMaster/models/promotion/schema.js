const Sequelize = require("sequelize");

module.exports = () => {
    return {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        discount: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        type: {
            type: Sequelize.ENUM(['more_than', 'regroup'].sort()),
            allowNull: false,
            defaultValue: 'more_than'
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        couponCode: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        expiryDate: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        deleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    };
}