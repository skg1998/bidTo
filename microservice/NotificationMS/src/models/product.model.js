module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        adminid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        name: { type: DataTypes.STRING },
        desc: { type: DataTypes.STRING },
        location: { type: DataTypes.STRING },
        price: { type: DataTypes.FLOAT },
        image: { type: DataTypes.STRING },
        category_id: { type: DataTypes.UUID },
        startbid: { type: DataTypes.DATE },
        endbid: { type: DataTypes.DATE }
    }, {});
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};