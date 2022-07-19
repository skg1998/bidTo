module.exports = (sequelize, DataTypes) => {
    const BIdding = sequelize.define("bidding", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        product_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        bid_id: {
            type: DataTypes.Number,
            allowNull: false
        },
        winner_id: {
            type: DataTypes.UUID,
            allowNull: true
        }
    });

    return BIdding;
};