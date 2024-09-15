// SlideShow.js
import React, { useState } from 'react';


// Import images

import image1 from '../assets/Pallekele.png';
import image2 from '../assets/Rpremadas.png';
import image3 from '../assets/Hambantota.png';

const SlideShow = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={prevSlide}>❮</button>
      <div className="slides">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default SlideShow;
