module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("set_bids", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        }
    });

    return Role;
};