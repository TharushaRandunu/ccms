const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // Adjust the path if needed

// Route to check availability (use POST)
router.post('/available', async (req, res) => {
  const { ground, date } = req.body;

  if (!ground || !date) {
    return res.status(400).json({ error: 'Ground and date are required' });
  }

  try {
    const existingBooking = await Booking.findOne({ ground, date: new Date(date) });
    res.json({ available: !existingBooking });
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({ error: 'Failed to check availability' });
  }
});

// Route to book a ground (use POST)
router.post('/book', async (req, res) => {
  const { ground, date, teams } = req.body;

  if (!ground || !date || !teams) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const existingBooking = await Booking.findOne({ ground, date: new Date(date) });

    if (existingBooking) {
      return res.status(400).json({ error: 'Ground is already booked for this date' });
    }

    const newBooking = new Booking({
      ground,
      date: new Date(date),
      teams: teams.split(',').map(team => team.trim()),
    });

    await newBooking.save();
    res.status(200).json({ message: 'Booking successful' });
  } catch (error) {
    console.error('Error booking ground:', error);
    res.status(500).json({ error: 'Failed to book ground' });
  }
});

module.exports = router;
