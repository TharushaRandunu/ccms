import React, { useState } from 'react';
import axios from 'axios';
import weatherLogo from '../assets/weather.png';

const WeatherPrediction = () => {
  const [formData, setFormData] = useState({
    time: '',
    country: '',
    city: ''
  });
  const [predictions, setPredictions] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send request to the backend
      const response = await axios.post('http://localhost:5000/api/ai/predict', formData);  
      setPredictions(response.data.prediction);  // Access 'prediction' from the response
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

  return (
    <div>
      <h1>Weather Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <img src={weatherLogo} alt="Logo" className="addUserimage" />
          
          <label>Date and Time:</label>
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <br />
          
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <br />

          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <br />

          <button type="submit">Predict</button>
        </div>
      </form>

      {predictions && (
        <div className="container">
          <h2>Predictions:</h2>
          <p>Rainfall: {predictions.rainfall}</p>
          <p>Wind Speed: {predictions.windspeed}</p>
          <p>Temperature: {predictions.temperature}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherPrediction;
