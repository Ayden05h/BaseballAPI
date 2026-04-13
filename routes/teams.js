const express = require("express");
const router = express.Router();

const { Team } = require("../models");


router.get("/", async (req, res, next) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (err) {
        next(err);
    }
});


router.get("/:id", async (req, res, next) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (!team) {
            return res.status(404).json({
                success: false,
                error: "Team not found"
            });
        }
        res.json(team);
    } catch (err) {
        next(err);
    }
});


router.post("/", async (req, res, next) => {
    try {
        if (!req.body.team_name) {
            return res.status(400).json({
                success: false,
                error: "team_name is required"
            });
        }

        const team = await Team.create(req.body);

        res.status(201).json({
            success: true,
            data: team
        });
    } catch (err) {
        next(err);
    }
});


router.put("/:id", async (req, res, next) => {
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


router.delete("/:id", async (req, res, next) => {
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