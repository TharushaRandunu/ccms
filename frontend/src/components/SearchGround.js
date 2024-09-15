// frontend/src/components/SearchGround.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SlideShow from './SlideShow';

function SearchGround() {
    const [grounds, setGrounds] = useState([]);

    useEffect(() => {
        const fetchGrounds = async () => {
            const res = await axios.get('http://localhost:5000/api/grounds');
            setGrounds(res.data);
        };
        fetchGrounds();
    }, []);

    return (
        <div>
            <h2>Available Grounds</h2>
            <SlideShow />
            <ul>
                {grounds.map(ground => (
                    <li key={ground._id}>{ground.name} - {ground.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchGround;
