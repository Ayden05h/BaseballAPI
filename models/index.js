const sequelize = require("../database/db");

const Team = require("./Team");
const Player = require("./Player");
const PlayerStats = require("./PlayerStats");
const User = require("./user");

// Relationships
Team.hasMany(Player, {
    foreignKey: "team_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    as: "players"
});

Player.belongsTo(Team, {
    foreignKey: "team_id",
    as: "team"
});

Player.hasMany(PlayerStats, {
    foreignKey: "player_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    as: "stats"
});

PlayerStats.belongsTo(Player, {
    foreignKey: "player_id",
    as: "player"
});

module.exports = {
    sequelize,
    Team,
    Player,
    PlayerStats,
    User
};