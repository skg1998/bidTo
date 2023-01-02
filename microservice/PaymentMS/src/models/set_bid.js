module.exports = (sequelize, DataTypes) => {
    const Bidding = sequelize.define("set_bids", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        bidder: {
            type: DataTypes.UUID,
            allowNull: false
        },
        bidding_amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        bidtime: {
            type: DataTypes.UUID
        }
    });

    return Bidding;
};