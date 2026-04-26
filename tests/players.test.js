const request = require("supertest");
const app = require("../server");

describe("Players API", () => {

    let createdPlayerId;

    // CREATE
    test("should create a player", async () => {
        const res = await request(app)
            .post("/players")
            .send({
                name: "Test Player",
                position: "Pitcher",
                jersey_number: 99,
                team_id: 1
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty("id");

        createdPlayerId = res.body.data.id;
    });

    // GET ALL
    test("should get all players", async () => {
        const res = await request(app).get("/players");

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });

    // GET BY ID
    test("should get player by id", async () => {
        const res = await request(app).get(`/players/${createdPlayerId}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });

    // UPDATE
    test("should update player", async () => {
        const res = await request(app)
            .put(`/players/${createdPlayerId}`)
            .send({
                name: "Updated Player"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });

    // DELETE
    test("should delete player", async () => {
        const res = await request(app).delete(`/players/${createdPlayerId}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });

});