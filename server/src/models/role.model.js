module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("roles", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING
        }
    });

    return Role;
};