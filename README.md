A full-featured RESTful API for managing baseball teams, players, and player statistics. This API includes authentication, role-based authorization, and complete CRUD functionality.
📌 Features
Full CRUD API for:
Teams
Players
Player Statistics
🔐 JWT Authentication (login/register)
🧑‍⚖️ Role-Based Authorization (user/admin)
🔒 Protected routes with middleware
Relational database with Sequelize associations
Input validation and error handling
Custom logging middleware
Centralized error handler
Seed script for sample data
SQLite database (local development)
Deployed to Render (production-ready)
🧱 Tech Stack
Node.js
Express.js
Sequelize ORM
SQLite (development)
PostgreSQL (recommended for production)
JSON Web Tokens (JWT)
bcryptjs
JavaScript
🌐 Live API
👉 https://baseballapi.onrender.com
📁 Project Structure
project-root/
│
├── database/
│   └── db.js
│
├── middleware/
│   ├── auth.js
│   ├── role.js
│   ├── errorHandler.js
│   └── logger.js
│
├── models/
│   ├── index.js
│   ├── Team.js
│   ├── Player.js
│   ├── PlayerStats.js
│   └── user.js
│
├── routes/
│   ├── auth.js
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
cd BaseballAPI
2. Install dependencies
npm install
3. Set environment variables
Create a .env file:
JWT_SECRET=your_secret_key
4. Set up the database
node setup.js
5. Seed the database
node seed.js
6. Start the server
node server.js
Server runs at:
http://localhost:3000
🔐 Authentication
Register
POST /auth/register
{
  "username": "testuser",
  "password": "password123",
  "role": "user"
}
Login
POST /auth/login
{
  "username": "testuser",
  "password": "password123"
}
Response:
{
  "success": true,
  "token": "your_jwt_token"
  }
🔑 Using the Token
Include this header for protected routes:
Authorization: Bearer <your_token>
🧑‍⚖️ User Roles
Role	Permissions
user	View data
admin	Create, update, delete
🧪 API Endpoints
🏟 Teams
Method	Endpoint	Auth	Role
GET	/teams	✔	user
GET	/teams/:id	✔	user
POST	/teams	✔	admin
PUT	/teams/:id	✔	admin
DELETE	/teams/:id	✔	admin
🧑 Players
Method	Endpoint	Auth
GET	/players	✔
GET	/players/:id	✔
POST	/players	✔
PUT	/players/:id	✔
DELETE	/players/:id	✔

📊 Player Stats
Method	Endpoint	Auth
GET	/stats	✔
GET	/stats/:id	✔
POST	/stats	✔
PUT	/stats/:id	✔
DELETE	/stats/:id	✔

📥 Example Requests
Create Team (Admin only)
POST /teams
Authorization: Bearer <token>
Content-Type: application/json
{
  "team_name": "Tigers"
}

Create Player
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
All errors return:
{
  "success": false,
  "error": "Error message here"
}
🧪 Testing
This API is fully testable using Postman.
Test flows include:
Register → Login → Save token
Access protected routes
Role-based access (admin vs user)
Invalid token handling
Edge cases (missing body, invalid credentials)
🚀 Deployment Notes
Hosted on Render
Environment variables configured
SQLite resets on redeploy (temporary storage)
👉 For persistent production data, PostgreSQL is recommended.
📬 Submission
GitHub Repo: (add your link)
Live API: https://baseballapi.onrender.com
Postman Collection: (export from Postman and attach)
