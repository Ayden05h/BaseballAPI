const sequelize = require("../database/db");

async function setup() {
    try {
        await sequelize.sync({ force: true });
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Database sync error:", error);
    } finally {
        await sequelize.close();
    }
}

setup();