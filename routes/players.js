const express = require("express")
const router = express.Router()
const { Player } = require("../models")

router.get("/", async (req, res) => {
    const players = await Player.findAll()
    res.json(players)
})

router.post("/", async (req, res) => {
    const player = await Player.create(req.body)
    res.status(201).json(player)
})

router.get("/:id", async (req, res) => {
    const player = await Player.findByPk(req.params.id)
    if (!player) return res.status(404).json({ error: "Player not found" })
    res.json(player)
})

router.put("/:id", async (req, res) => {
    const player = await Player.findByPk(req.params.id)
    if (!player) return res.status(404).json({ error: "Player not found" })

    await player.update(req.body)
    res.json(player)
})

router.delete("/:id", async (req, res) => {
    const player = await Player.findByPk(req.params.id)
    if (!player) return res.status(404).json({ error: "Player not found" })

    await player.destroy()
    res.json({ message: "Deleted" })
})

module.exports = router