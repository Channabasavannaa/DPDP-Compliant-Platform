import express from "express";
import db from "../db.js";

const router = express.Router();

// Middleware to verify admin key
router.use((req, res, next) => {
    const adminKey = req.headers["x-admin-key"];

    if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    next();
});

// GET all users
router.get("/users", (req, res) => {
    const users = db
        .prepare(
            `
            SELECT *
            FROM users
            ORDER BY created_at DESC
            `
        )
        .all();

    res.json(users);
});

// Revoke consent
router.patch("/users/:id/revoke", (req, res) => {
    const { id } = req.params;

    const user = db
        .prepare(
            `
            SELECT *
            FROM users
            WHERE id=?
            `
        )
        .get(id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    if (user.consent === 0) {
        return res.status(400).json({
            message: "Consent already revoked"
        });
    }

    db.prepare(
        `
        UPDATE users
        SET consent=0
        WHERE id=?
        `
    ).run(id);

    res.json({
        message: "Consent revoked successfully"
    });
});

export default router;