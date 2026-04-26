const sequelize = require("../database/db");

async function setup() {
    try {
        await sequelize.sync(); 
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Database sync error:", error);
    } finally {
        await sequelize.close();
    }
}

setup();