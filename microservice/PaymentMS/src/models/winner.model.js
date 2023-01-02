module.exports = (sequelize, DataTypes) => {
    const Winner = sequelize.define("winners", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        bidding_amount: {
            type: DataTypes.FLOAT
        }
    });

    return Winner;
};