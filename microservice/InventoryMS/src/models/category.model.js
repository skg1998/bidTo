module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: { type: DataTypes.STRING },
        desc: { type: DataTypes.STRING },
        image: { type: DataTypes.STRING }
    }, {});
    Category.associate = function (models) {
        // associations can be defined here
    };
    return Category;
};