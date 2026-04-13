const sequelize = require("../database/db")

const Team = require("./Teams")
const Player = require("./Player")
const PlayerStats = require("./PlayerStats")

Team.hasMany(Player, { foreignKey: "team_id" })
Player.belongsTo(Team, { foreignKey: "team_id" })

Player.hasMany(PlayerStats, { foreignKey: "player_id" })
PlayerStats.belongsTo(Player, { foreignKey: "player_id" })

module.exports = { sequelize, Team, Player, PlayerStats }