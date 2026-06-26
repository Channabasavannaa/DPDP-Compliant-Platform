import express from "express";
import db from "../db.js";
import { v4 as uuid } from "uuid";

const router = express.Router();

router.post("/submit", (req, res) => {

    const {
        full_name,
        email,
        phone,
        consent
    } = req.body;

    if (!full_name || !email || !phone || consent !== true) {
        return res.status(400).json({
            message: "Invalid data"
        });
    }

    const existing = db.prepare(
        "SELECT * FROM users WHERE email=?"
    ).get(email);

    if (existing) {
        return res.status(409).json({
            message: "Email already exists"
        });
    }

    db.prepare(`
    INSERT INTO users
    VALUES (?,?,?,?,?,?)
    `).run(
        uuid(),
        full_name,
        email,
        phone,
        1,
        new Date().toISOString()
    );

    res.status(201).json({
        message: "Consent submitted successfully"
    });

});

export default router;