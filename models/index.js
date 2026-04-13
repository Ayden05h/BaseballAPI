const sequelize = require("../database/db");

const Team = require("./team");
const Player = require("./player");
const PlayerStats = require("./playerStats");

// Relationships
Team.hasMany(Player, { foreignKey: "team_id", onDelete: "CASCADE" });
Player.belongsTo(Team, { foreignKey: "team_id" });

Player.hasMany(PlayerStats, { foreignKey: "player_id", onDelete: "CASCADE" });
PlayerStats.belongsTo(Player, { foreignKey: "player_id" });

module.exports = {
    sequelize,
    Team,
    Player,
    PlayerStats
};