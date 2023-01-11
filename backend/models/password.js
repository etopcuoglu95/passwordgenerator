var user = require("./user.js");

module.exports = function (sequelize, DataTypes) {

var password = sequelize.define("password", {
    pass: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    
});
    password.associate = function (models)
    {
        password.belongsTo(models.user);
    }
    return password;
};