const sequelize = require("../database/db");
const { Team, Player, PlayerStats } = require("../models");

async function seed() {
    try {
        await sequelize.sync({ force: true });

        // Create teams
        const team = await Team.create({
            team_name: "Tigers"
        });

        // Create players
        const player = await Player.create({
            name: "John Smith",
            position: "Pitcher",
            jersey_number: 12,
            team_id: team.id
        });

        const player2 = await Player.create({
            name: "Mike Johnson",
            position: "Catcher",
            jersey_number: 8,
            team_id: team.id
        });

        // Create stats
        await PlayerStats.create({
            game_date: new Date(),
            hits: 2,
            walks: 1,
            strikeouts: 3,
            player_id: player.id
        });

        await PlayerStats.create({
            game_date: new Date(),
            hits: 1,
            walks: 0,
            strikeouts: 2,
            player_id: player2.id
        });

        console.log("Database seeded successfully");

    } catch (error) {
        console.error("Seeding error:", error);
    } finally {
        await sequelize.close();
    }
}

seed();