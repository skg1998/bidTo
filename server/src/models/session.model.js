module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('sessions', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        start_date: { type: DataTypes.DATE },
        end_date: { type: DataTypes.DATE },
        start_time: { type: DataTypes.TIME },
        end_time: { type: DataTypes.TIME },
        winner_id: { type: DataTypes.INTEGER },
        invoice: { type: DataTypes.STRING }
    }, {});

    return Session;
};