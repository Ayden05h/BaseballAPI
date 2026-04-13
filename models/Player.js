const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Player = sequelize.define("Player", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 50]
        }
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jersey_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Teams",
            key: "id"
        }
    }
}, {
    timestamps: true
});

module.exports = Player;