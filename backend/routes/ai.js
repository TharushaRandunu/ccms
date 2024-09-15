const express = require('express');
const { PythonShell } = require('python-shell');
const router = express.Router();

// Endpoint to interact with AI model
router.post('/predict', async (req, res) => {
    const { date, city } = req.body;

    try {
        // Prepare the input data for the Python script
        const inputData = {
            date,
            city
        };

        // Convert inputData to JSON format to pass to the Python script
        const inputDataJSON = JSON.stringify(inputData);

        // Define options for PythonShell to pass the input data
        let options = {
            mode: 'text',
            pythonOptions: ['-u'],
            scriptPath: './python_scripts', // Ensure your Python script is in this folder
            args: [inputDataJSON]
        };

        // Run the Python script and pass the input data
        PythonShell.run('predict_model.py', options, (err, results) => {
            if (err) {
                console.error('Error running Python script:', err);
                return res.status(500).json({ error: 'Error running Python script' });
            }

            // Parse the Python script's output (predictions)
            try {
                const predictions = JSON.parse(results[0]);
                // Send the prediction back to the client
                res.json({ predictions });
            } catch (parseErr) {
                console.error('Error parsing Python output:', parseErr);
                res.status(500).json({ error: 'Error processing AI prediction' });
            }
        });
    } catch (err) {
        console.error('Error interacting with AI model:', err);
        res.status(500).json({ error: 'Error interacting with AI model' });
    }
});

module.exports = router;
