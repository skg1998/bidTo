const config = require('../config/config.json')
const Sequelize = require("sequelize");

let sequelize;
if (config.DATABASE_URL) {
    sequelize = new Sequelize(process.env[config.DATABASE_URL]);
} else {
    sequelize = new Sequelize(
        process.env[config.development.database],
        process.env[config.development.username],
        process.env[config.development.password],
        {
            host: process.env[config.development.host],
            dialect: process.env[config.development.dialect],
            pool: {
                max: 100,
                min: 0,
                idle: 200000,
                acquire: 1000000
            }
        }
    )
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.model")(sequelize, Sequelize);
db.Product = require("./product.model")(sequelize, Sequelize);
db.Category = require("./category.model")(sequelize, Sequelize);
db.Session = require("./session.model")(sequelize, Sequelize);
db.Role = require('./role.model')(sequelize, Sequelize);
db.Image = require("./image.model")(sequelize, Sequelize);
db.SetBid = require("./set_bid")(sequelize, Sequelize);
db.Winner = require("./winner.model")(sequelize, Sequelize);

db.Role.belongsToMany(db.User, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.User.belongsToMany(db.Role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

//creates the table if it doesn't exist 
//{ force: true }
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

module.exports = db;