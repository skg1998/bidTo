module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('image', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        data: { type: DataTypes.STRING },
        cloudnaryId: { type: DataTypes.STRING }
    }, {});
    Image.associate = function (models) {
        // associations can be defined here
    };
    return Image;
};