const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  ground: { type: String, required: true },
  date: { type: Date, required: true },
  teams: { type: [String], required: true }, // Array of strings
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
