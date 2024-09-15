// backend/models/Ground.js
const mongoose = require('mongoose');
const GroundSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    available: { type: Boolean, default: true },
});
module.exports = mongoose.model('Ground', GroundSchema);
