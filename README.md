# BaseballAPI

📌 Features
Full CRUD API for:
Teams
Players
Player Statistics
Relational database with Sequelize associations
Input validation and error handling
Custom logging middleware
Centralized error handler
Seed script for sample data
SQLite database (no external setup required)
🧱 Tech Stack
Node.js
Express.js
Sequelize ORM
SQLite
JavaScript

📁 Project Structure
project-root/
│
├── database/
│   └── db.js
│
├── middleware/
│   ├── errorHandler.js
│   └── logger.js
│
├── models/
│   ├── index.js
│   ├── team.js
│   ├── player.js
│   └── playerStats.js
│
├── routes/
│   ├── teams.js
│   ├── players.js
│   └── stats.js
│
├── seed.js
├── setup.js
├── server.js
├── package.json
└── README.md

⚙️ Setup Instructions
1. Clone the repository
git clone <your-repo-url>
cd <your-repo-name>
2. Install dependencies
npm install
3. Set up the database
node setup.js
This will sync all Sequelize models and create the database tables.
4. Seed the database
node seed.js
This will populate the database with sample teams, players, and stats.
5. Start the server
node server.js
Server will run at:
http://localhost:3000
🧪 API Endpoints
🏟 Teams
Method	Endpoint	Description
GET	/teams	Get all teams
GET	/teams/:id	Get team by ID
POST	/teams	Create a new team
PUT	/teams/:id	Update a team
DELETE	/teams/:id	Delete a team
🧑 Players
Method	Endpoint	Description
GET	/players	Get all players
GET	/players/:id	Get player by ID
POST	/players	Create a player
PUT	/players/:id	Update a player
DELETE	/players/:id	Delete a player
📊 Player Stats
Method	Endpoint	Description
GET	/stats	Get all stats
GET	/stats/:id	Get stat by ID
POST	/stats	Create stats record
PUT	/stats/:id	Update stats
DELETE	/stats/:id	Delete stats
📥 Example Request
Create a Team
POST /teams
Content-Type: application/json
{
  "team_name": "Tigers"
}
Create a Player
{
  "name": "John Smith",
  "position": "Pitcher",
  "jersey_number": 12,
  "team_id": 1
}
Create Player Stats
{
  "game_date": "2026-04-12",
  "hits": 2,
  "walks": 1,
  "strikeouts": 3,
  "player_id": 1
}
⚠️ Error Handling
All errors return JSON in the format:
{
  "success": false,
  "error": "Error message here"
}
