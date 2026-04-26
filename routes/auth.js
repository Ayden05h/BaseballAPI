const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// REGISTER
router.post("/register", async (req, res, next) => {
    try {
        const { username, password, role } = req.body || {};

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                error: "Username and password are required"
            });
        }

        const existingUser = await User.findOne({ where: { username } });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: "Username already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            password: hashedPassword,
            role: role || "user"
        });

        res.status(201).json({
            success: true,
            message: "User created"
        });

    } catch (err) {
        next(err);
    }
});

// LOGIN
router.post("/login", async (req, res, next) => {
    try {
    
        const { username, password } = req.body || {};

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                error: "Username and password are required"
            });
        }

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({
                success: false,
                error: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                error: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.json({
            success: true,
            token
        });

    } catch (err) {
        next(err);
    }
});

module.exports = router;