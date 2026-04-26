require("dotenv").config();
const express = require("express");
const app = express();

const { sequelize } = require("./models");

// Routes
const teamRoutes = require("./routes/teams");
const playerRoutes = require("./routes/players");
const statsRoutes = require("./routes/stats");
const authRoutes = require("./routes/auth");

// Middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

// Body parser
app.use(express.json());

// Logger middleware
app.use(logger);

// Routes
app.use("/auth", authRoutes);
app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);
app.use("/stats", statsRoutes);

// Health check
app.get("/", (req, res) => {
    res.send("Baseball API Running");
});

// Error handler 
app.use(errorHandler);

const PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV !== "test") {
    sequelize.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
}

module.exports = app;