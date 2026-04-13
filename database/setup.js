const { sequelize } = require("../models")

async function setup() {
    await sequelize.sync({ force: true })
    console.log("Database synced")
}

setup()