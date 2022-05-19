const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    const { INTEGER, STRING, DATE, UUID, UUIDV4 } = DataTypes
    const User = sequelize.define("users", {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        username: {
            type: STRING
        },
        email: {
            type: STRING
        },
        image: { type: STRING },
        gender: {
            type: STRING
        },
        address: {
            type: STRING
        },
        password: {
            type: STRING,
            allowNull: false
        },
        resetPasswordToken: {
            type: STRING,
            required: false
        },
        resetPasswordExpire: {
            type: DATE,
            required: false
        },
        createdAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'created_at'
        },
        updatedAt: {
            type: DATE,
            allowNull: false,
            defaultValue: new Date(),
            field: 'updated_at'
        }
    }, {
        hooks: {
            beforeCreate: async function (user, options) {
                const salt = await bcrypt.genSalt(10)
                user.password = bcrypt.hashSync(user.password, salt);
            },
            afterCreate: function (user, options) { }
        }
    });

    // Match user entered password to hashed password in database
    User.prototype.matchPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    };

    //Sign jWT and return 
    User.prototype.getSignedJwtToken = function () {
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE
        })
    };

    //Generate and hashed password token
    User.prototype.getResetPasswordToken = function () {
        // Generate token
        const resetToken = crypto.randomBytes(20).toString('hex');

        // Hash token and set to resetPasswordToken field
        this.resetPasswordToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        // Set expire
        this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
        return resetToken;
    }

    return User
};