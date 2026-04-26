const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false 
});

sequelize.authenticate()
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));

module.exports = sequelize;