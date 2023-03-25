module.exports = (sequelize, DataTypes) => {
    // Define the Bid model
    const Bid = sequelize.define('bid', {
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Bid;
};