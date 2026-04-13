const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Team = sequelize.define("Team", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    team_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 50]
        },
        unique: true
    }
}, {
    timestamps: true
});

module.exports = Team;