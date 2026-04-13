const express = require("express")
const router = express.Router()
const { PlayerStats } = require("../models")

router.get("/", async (req, res) => {
    const stats = await PlayerStats.findAll()
    res.json(stats)
})

router.post("/", async (req, res) => {
    const stat = await PlayerStats.create(req.body)
    res.status(201).json(stat)
})

router.get("/:id", async (req, res) => {
    const stat = await PlayerStats.findByPk(req.params.id)
    if (!stat) return res.status(404).json({ error: "Stat not found" })
    res.json(stat)
})

router.put("/:id", async (req, res) => {
    const stat = await PlayerStats.findByPk(req.params.id)
    if (!stat) return res.status(404).json({ error: "Stat not found" })

    await stat.update(req.body)
    res.json(stat)
})

router.delete("/:id", async (req, res) => {
    const stat = await PlayerStats.findByPk(req.params.id)
    if (!stat) return res.status(404).json({ error: "Stat not found" })

    await stat.destroy()
    res.json({ message: "Deleted" })
})

module.exports = router