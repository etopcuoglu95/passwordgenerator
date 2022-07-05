module.exports = function (sequelize, DataTypes) {

var password = sequelize.define("passwords", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    pass: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});
    return password;
};