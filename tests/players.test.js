const request = require("supertest")
const app = require("../server")

describe("Players API", () => {
    it("GET /players should return 200", async () => {
    const res = await request(app).get("/players")
    expect(res.statusCode).toBe(200)
})
})