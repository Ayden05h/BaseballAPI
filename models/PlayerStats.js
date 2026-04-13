const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const PlayerStats = sequelize.define("PlayerStats", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    game_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    walks: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    strikeouts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Players",
            key: "id"
        }
    }
}, {
    timestamps: true
});

module.exports = PlayerStats;