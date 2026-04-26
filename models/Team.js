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
        unique: true,
        validate: {
            notEmpty: true,
            len: [2, 50]
        }
    }
}, {
    timestamps: true,
    tableName: "Teams"
});

module.exports = Team;