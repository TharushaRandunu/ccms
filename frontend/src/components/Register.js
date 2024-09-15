// frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/adduser.png'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    
    const { username, email, password } = formData;
    
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log('Registration successful', response.data);
            setMessage('Registration Successful!');
            setIsError(false);
            setShowMessage(true);
        
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (err) {
            console.error('Error in registration', err.response.data);
            setIsError(true);
            setShowMessage(true);

            
        }
        setTimeout(() => setShowMessage(false), 3000);
    };

    return (
        <div>
            <h1>Register</h1>
            {showMessage && (
                <div className={`message-box ${isError ? 'error' : 'success'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={onSubmit}>
                <div className="container">
                <img src={logo} alt="Logo" className="addUserimage" /> 
                <label>Username:</label>
                  <div>
                    
                  <input type="text" name="username" value={username} onChange={onChange} required /></div>
                    <label>Email:</label>
                    <div>
                    
                    <input type="email" name="email" value={email} onChange={onChange} required />
                    </div>
                    <label>Password:</label>
                    <div>
                   
                    <input type="password" name="password" value={password} onChange={onChange} required />
                    </div>
                    
                   
                <button type="submit">Register</button>
                </div>
            </form>
            </div>
        
    );
};

export default Register;
