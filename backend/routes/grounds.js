// backend/routes/ground.js
const express = require('express');
const Ground = require('../models/Ground');

const router = express.Router();

// Get all grounds
router.get('/', async (req, res) => {
    try {
        const grounds = await Ground.find();
        res.json(grounds);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Book a ground
router.post('/book', async (req, res) => {
    const { groundId } = req.body;

    try {
        const ground = await Ground.findById(groundId);
        if (!ground) {
            return res.status(404).json({ message: 'Ground not found' });
        }

        if (!ground.available) {
            return res.status(400).json({ message: 'Ground is not available' });
        }

        ground.available = false;
        await ground.save();

        res.json({ message: 'Ground booked successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
