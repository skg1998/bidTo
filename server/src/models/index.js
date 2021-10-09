const config = require('../config/config.json')
const Sequelize = require("sequelize");

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(
        config.development.database, config.development.username, config.development.password, {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 100,
            min: 0,
            idle: 200000,
            // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
            acquire: 1000000,
        },
    }
    )
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User.model")(sequelize, Sequelize);

module.exports = db;