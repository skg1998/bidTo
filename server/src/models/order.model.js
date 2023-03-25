module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'products',
                key: 'id',
            },
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
            },
        },
        totalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
            },
        },
    });

    console.log(sequelize.models);
    // Associations 
    // Order.belongsTo(sequelize.models.Product, { foreignKey: 'productId' });
    // Order.belongsTo(sequelize.models.User, { foreignKey: 'userId' });

    Order.associate = (models) => {
        Order.belongsTo(models.Product, {
            foreignKey: 'productId',
            as: 'product',
        });
        Order.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    };

    return Order;
};
