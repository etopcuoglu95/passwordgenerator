var user = require("./user.js");

module.exports = function (sequelize, DataTypes) {

var password = sequelize.define("password", {

    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    userId: {
        type: DataTypes.INTEGER,
    }
    
});
    password.associate = function (models)
    {
        password.belongsTo(models.user);
    }
    return password;
};