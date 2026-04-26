const express = require("express");
const router = express.Router();
const { Player, Team } = require("../models");

// GET all players
router.get("/", async (req, res, next) => {
    try {
        const players = await Player.findAll();
        res.json(players);
    } catch (err) {
        next(err);
    }
});

// GET player by ID
router.get("/:id", async (req, res, next) => {
    try {
        const player = await Player.findByPk(req.params.id);

        if (!player) {
            return res.status(404).json({
                success: false,
                error: "Player not found"
            });
        }

        res.json(player);
    } catch (err) {
        next(err);
    }
});

// CREATE player
router.post("/", async (req, res, next) => {
    try {
        const { name, position, jersey_number, team_id } = req.body;

        // Basic validation (rubric requirement)
        if (!name || !position || !team_id) {
            return res.status(400).json({
                success: false,
                error: "name, position, and team_id are required"
            });
        }

        // Ensure team exists (prevents FK crash)
        const team = await Team.findByPk(team_id);
        if (!team) {
            return res.status(400).json({
                success: false,
                error: "Invalid team_id: team does not exist"
            });
        }

        const player = await Player.create(req.body);

        res.status(201).json({
            success: true,
            data: player
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE player
router.put("/:id", async (req, res, next) => {
    try {
        const player = await Player.findByPk(req.params.id);

        if (!player) {
            return res.status(404).json({
                success: false,
                error: "Player not found"
            });
        }

        await player.update(req.body);

        res.json({
            success: true,
            data: player
        });
    } catch (err) {
        next(err);
    }
});

// DELETE player
router.delete("/:id", async (req, res, next) => {
    try {
        const player = await Player.findByPk(req.params.id);

        if (!player) {
            return res.status(404).json({
                success: false,
                error: "Player not found"
            });
        }

        await player.destroy();

        res.json({
            success: true,
            message: "Player deleted"
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;