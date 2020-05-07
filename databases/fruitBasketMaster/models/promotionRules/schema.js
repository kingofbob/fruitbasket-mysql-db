const Sequelize = require("sequelize");

module.exports = () => {
    return {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        condition: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
    };
}