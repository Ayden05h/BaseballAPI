const express = require("express");
const router = express.Router();
const { PlayerStats, Player } = require("../models");

// GET all stats
router.get("/", async (req, res, next) => {
    try {
        const stats = await PlayerStats.findAll();
        res.json(stats);
    } catch (err) {
        next(err);
    }
});

// GET stat by ID
router.get("/:id", async (req, res, next) => {
    try {
        const stat = await PlayerStats.findByPk(req.params.id);

        if (!stat) {
            return res.status(404).json({
                success: false,
                error: "Stat not found"
            });
        }

        res.json(stat);
    } catch (err) {
        next(err);
    }
});

// CREATE stat
router.post("/", async (req, res, next) => {
    try {
        const { game_date, hits, walks, strikeouts, player_id } = req.body;

        // Basic validation (rubric requirement)
        if (!game_date || !player_id) {
            return res.status(400).json({
                success: false,
                error: "game_date and player_id are required"
            });
        }

        // Ensure player exists (prevents FK crash)
        const player = await Player.findByPk(player_id);
        if (!player) {
            return res.status(400).json({
                success: false,
                error: "Invalid player_id: player does not exist"
            });
        }

        const stat = await PlayerStats.create(req.body);

        res.status(201).json({
            success: true,
            data: stat
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE stat
router.put("/:id", async (req, res, next) => {
    try {
        const stat = await PlayerStats.findByPk(req.params.id);

        if (!stat) {
            return res.status(404).json({
                success: false,
                error: "Stat not found"
            });
        }

        await stat.update(req.body);

        res.json({
            success: true,
            data: stat
        });
    } catch (err) {
        next(err);
    }
});

// DELETE stat
router.delete("/:id", async (req, res, next) => {
    try {
        const stat = await PlayerStats.findByPk(req.params.id);

        if (!stat) {
            return res.status(404).json({
                success: false,
                error: "Stat not found"
            });
        }

        await stat.destroy();

        res.json({
            success: true,
            message: "Stat deleted"
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;