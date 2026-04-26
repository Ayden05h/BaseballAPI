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
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    hits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 10
        }
    },
    walks: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 10
        }
    },
    strikeouts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 10
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
    timestamps: true,
    tableName: "PlayerStats"
});

module.exports = PlayerStats;