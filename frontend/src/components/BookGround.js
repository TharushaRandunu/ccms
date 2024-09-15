import React, { useState } from 'react';
import axios from 'axios';

const BookGround = () => {
  const [ground, setGround] = useState('');
  const [date, setDate] = useState('');
  const [teams, setTeams] = useState('');
  const [message, setMessage] = useState('');

  // Function to check availability (use POST request)
  const checkAvailability = async () => {
    try {
      const response = await axios.post('/api/bookings/available', { ground, date });
      return response.data.available;
    } catch (error) {
      console.error('Error checking availability:', error);
      setMessage('Failed to check availability');
      return false;
    }
  };

  // Handle form submission for booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAvailable = await checkAvailability();

    if (isAvailable) {
      try {
        await axios.post('/api/bookings/book', { ground, date, teams });
        setMessage('Booking successful');
      } catch (error) {
        console.error('Error booking ground:', error);
        setMessage('Failed to book ground');
      }
    } else {
      setMessage('Ground is already booked for this date');
    }
  };

  return (
    <div>
      <h1>Book a Ground</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ground">Ground:</label>
          <input
            type="text"
            id="ground"
            value={ground}
            onChange={(e) => setGround(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="teams">Teams (comma separated):</label>
          <input
            type="text"
            id="teams"
            value={teams}
            onChange={(e) => setTeams(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Ground</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookGround;
