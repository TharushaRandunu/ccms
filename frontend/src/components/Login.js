// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
//import logo from '../assets/login.png'
import loginLogo from '../assets/login.png'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            console.log('Login successful', response.data);
            // Save token, redirect, or show success message
            setMessage('Login successful');
            setIsError(false);
            setShowMessage(true);
        
            setTimeout(() => {
                navigate('/predict-weather');
            }, 3000);
        } catch (err) {
            console.error('Error in login', err.response.data);
            setIsError(true);
            setShowMessage(true);
        }
        setTimeout(() => setShowMessage(false), 3000);
    };
    return (
        <div>
            <h1>Login</h1>
            {showMessage && (
                <div className={`message-box ${isError ? 'error' : 'success'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={onSubmit}>
               <div className="container">
               <img src={loginLogo} alt="Logo" className="addUserimage" /> 
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <button type="submit">Login</button>
                </div> 
            </form>
        </div>
    );
};

export default Login;
