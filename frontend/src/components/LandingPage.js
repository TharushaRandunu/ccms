// frontend/src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import lanlogo from '../assets/webLogo.png'


function LandingPage() {
    return (
    <div>
       
      
        <h1></h1>
        <div className="landingData">
      <img src={lanlogo} alt="Company Logo" className="landlogo" />
      <h1 className="company-name">Club Cricket Match Scheduler</h1>
      <p className="description">
      The Club Cricket Match Scheduler is a web-based platform designed to simplify the scheduling of cricket matches for clubs. It allows users to book cricket grounds online by checking availability in real-time. The platform also incorporates features like weather prediction using AI, helping teams avoid match cancellations due to bad weather. Registered users can search for grounds, view detailed ground information, and book slots for practice sessions or official matches. The system ensures smooth and efficient ground management, making match organization hassle-free for both players and administrators. 
      </p>
      <button type="submit">Book Ground</button>
       {/* Sections for Weather Prediction, Ground Search, and Booking Ground */}
       <div className="sections">
        <div className="section weather-prediction">
          <h2>Weather Prediction</h2>
          <p>Accurate weather prediction is crucial for optimizing cricket match scheduling and ensuring a seamless experience for players and organizers. In this project, we leverage advanced machine learning techniques, specifically a Random Forest model, to forecast weather conditions such as rainfall and wind speed. By integrating real-time weather data and historical patterns, our system provides reliable forecasts that help in planning matches and making informed decisions. This proactive approach minimizes disruptions caused by adverse weather, allowing for better ground management and scheduling, ultimately enhancing the overall efficiency of cricket event planning.

.</p>
        </div>
        <div className="section ground-search">
          <h2>Ground Search</h2>
          <p>The ground search feature is designed to simplify the process of locating suitable cricket grounds. Users can easily search for available grounds based on various criteria such as location, size, and amenities. The intuitive search interface provides detailed information on each ground, including its facilities and availability status, allowing users to make informed decisions quickly. This feature ensures that finding the perfect ground for any cricket event is efficient and hassle-free..</p>
        </div>
        <div className="section booking-ground">
          <h2>Book Ground</h2>
          <p>The ground booking system streamlines the reservation process, allowing users to secure cricket grounds with ease. By integrating real-time availability data, the system ensures that users can view and book available grounds without conflicts. The booking interface is designed for simplicity and efficiency, enabling users to complete their reservations quickly and manage their bookings effortlessly. This automated approach reduces administrative workload and enhances the overall efficiency of ground management, providing a seamless experience for event organizers and players.</p>
        </div>
        
      </div>
    </div>
   
    </div>
        
    );
}

export default LandingPage;
