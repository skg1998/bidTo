module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: { type: DataTypes.STRING },
        desc: { type: DataTypes.STRING },
        price: { type: DataTypes.FLOAT },
        image: { type: DataTypes.STRING },
        Category: { type: DataTypes.INTEGER },
        session_id: { type: DataTypes.INTEGER }

    }, {});
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};