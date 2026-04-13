const express = require("express")
const app = express()
require("dotenv").config()

//const logger = require("./middleware/logger")
//const errorHandler = require("./middleware/errorHandler")

//const teamRoutes = require("./routes/teams")
//const playerRoutes = require("./routes/players")
//const statsRoutes = require("./routes/stats")

app.use(express.json())
app.use(logger)

app.use("/teams", teamRoutes)
app.use("/players", playerRoutes)
app.use("/stats", statsRoutes)

app.get("/", (req, res) => {
    res.send("Baseball Stats API Running")
})

app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app