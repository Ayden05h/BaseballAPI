require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
    : new Sequelize({
        dialect: "sqlite",
        storage: "./database.sqlite"
    });

module.exports = sequelize;