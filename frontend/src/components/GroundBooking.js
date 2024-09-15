// frontend/src/components/GroundBooking.js
import React, { useState } from 'react';
import axios from 'axios';

function GroundBooking() {
    const [groundId, setGroundId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/grounds/book', { groundId });
            alert(res.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Book a Ground</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={groundId} 
                    onChange={(e) => setGroundId(e.target.value)} 
                    placeholder="Ground ID" 
                    required 
                />
                <button type="submit">Book Ground</button>
            </form>
        </div>
    );
}

export default GroundBooking;
