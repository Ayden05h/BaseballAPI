const sequelize = require("../database/db");
const { Team, Player, PlayerStats } = require("../models");

async function seed() {
    try {
        await sequelize.sync({ force: true }); // rebuild DB each run

        const team = await Team.create({
            team_name: "Tigers"
        });

        const player = await Player.create({
            name: "John Smith",
            position: "Pitcher",
            jersey_number: 12,
            team_id: team.id
        });

        await PlayerStats.create({
            game_date: new Date(),
            hits: 2,
            walks: 1,
            strikeouts: 3,
            player_id: player.id
        });

        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Seeding error:", error);
    } finally {
        await sequelize.close();
    }
}

seed();