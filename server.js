const express = require("express");
const app = express();

const { sequelize } = require("./models");

// Routes
const teamRoutes = require("./routes/teams");
const playerRoutes = require("./routes/players");
const statsRoutes = require("./routes/stats");

// Middleware
const errorHandler = require("./middleware/errorHandler");

// Body parser
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes 
app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);
app.use("/stats", statsRoutes);

// Health check route
app.get("/", (req, res) => {
    res.send("Baseball API Running");
});

// Error handler 
app.use(errorHandler);

const PORT = 3000;

// start server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

module.exports = app;