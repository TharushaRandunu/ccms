import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SearchGround from './components/SearchGround';
import GroundBooking from './components/GroundBooking';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
//import WeatherPrediction from './components/WeatherPrediction';
import PredictionForm from './components/PredictionForm';
import BookGround from './components/BookGround';



function App() {
    return (
      <Router>
        <Header/>
      <div className="App">
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/search" element={<SearchGround />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/predict-weather" element={<PredictionForm />} />
              <Route path="/book" element={<BookGround />} />
              
             
          </Routes>
          <Footer/>
      </div>
     
  </Router>
  
    );
}

export default App;