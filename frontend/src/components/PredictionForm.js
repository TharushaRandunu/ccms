import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [predictions, setPredictions] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/ai/predict', {
        date,
        city
      });
      console.log(response);
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  return (
    <div>
      <h2>Weather Predictions</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Predictions</button>
      </form>

      {predictions && (
        <div>
          <h3>Predictions:</h3>
          <p>Rainfall: {predictions.rainfall} mm</p>
          <p>Windspeed: {predictions.windspeed} km/h</p>
          <p>Temperature: {predictions.temperature} °C</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
