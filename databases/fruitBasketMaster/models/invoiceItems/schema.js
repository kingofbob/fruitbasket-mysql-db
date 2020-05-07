const Sequelize = require("sequelize");

module.exports = () => {
    return {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        price: {
            type: Sequelize.DECIMAL(13,2),
            allowNull: false,
        },
        productName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        promotionName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        promotionDiscount: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        originalPrice: {
            type: Sequelize.DECIMAL(13,2),
            allowNull: true,
        },
        totalPrice: {
            type: Sequelize.DECIMAL(13,2),
            allowNull: false,
        },
    };
}