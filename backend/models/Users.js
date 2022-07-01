module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/i,
            },
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        AdminLevel: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return user;
};