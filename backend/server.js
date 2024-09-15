// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');
require('dotenv').config();
const app = express();

// Import routes
const bookingRoutes = require('./routes/booking'); // Ensure this path is correct

// Middleware
app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Use routes
const authRoutes = require('./routes/auth');
const groundRoutes = require('./routes/grounds');
const aiRoutes = require('./routes/ai');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/grounds', groundRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/bookings', bookingRoutes); // Ensure this route is properly used

// AI Prediction Route
app.post('/api/ai/predict', (req, res) => {
    const inputData = req.body;

    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: './python_scripts/',
        args: [JSON.stringify(inputData)]
    };

    PythonShell.run('predict_model.py', options, (err, results) => {
        if (err) {
            console.error('Error executing Python script:', err);
            return res.status(500).send('Error in AI prediction');
        }

        try {
            const predictions = JSON.parse(results[0]);
            res.json({ predictions });
        } catch (parseErr) {
            console.error('Error parsing Python output:', parseErr);
            res.status(500).send('Error processing AI prediction');
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
