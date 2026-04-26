const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const { Team } = require("../models");

// GET all teams
router.get("/", auth, async (req, res, next) => {
    try {
        const teams = await Team.findAll();

        res.json({
            success: true,
            data: teams
        });
    } catch (err) {
        next(err);
    }
});

// GET team by ID
router.get("/:id", auth, async (req, res, next) => {
    try {
        const team = await Team.findByPk(req.params.id);

        if (!team) {
            return res.status(404).json({
                success: false,
                error: "Team not found"
            });
        }

        res.json({
            success: true,
            data: team
        });
    } catch (err) {
        next(err);
    }
});

// CREATE team 
router.post("/", auth, role(["admin"]), async (req, res, next) => {
    try {
        const { team_name } = req.body || {};

        if (!team_name) {
            return res.status(400).json({
                success: false,
                error: "team_name is required"
            });
        }

        const team = await Team.create({ team_name });

        res.status(201).json({
            success: true,
            data: team
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE team 
router.put("/:id", auth, role(["admin"]), async (req, res, next) => {
    try {
        const team = await Team.findByPk(req.params.id);

        if (!team) {
            return res.status(404).json({
                success: false,
                error: "Team not found"
            });
        }

        await team.update(req.body);

        res.json({
            success: true,
            data: team
        });
    } catch (err) {
        next(err);
    }
});

// DELETE team
router.delete("/:id", auth, role(["admin"]), async (req, res, next) => {
    try {
        const team = await Team.findByPk(req.params.id);

        if (!team) {
            return res.status(404).json({
                success: false,
                error: "Team not found"
            });
        }

        await team.destroy();

        res.json({
            success: true,
            message: "Team deleted"
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;