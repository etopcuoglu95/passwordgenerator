module.exports = function (sequelize, DataTypes) {

var password = sequelize.define("passwords", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});
    return password;
};