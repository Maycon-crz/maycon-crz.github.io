import React, { useState } from "react";

import "../styles/components/carousel.sass"

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const isObject = typeof images[0] === 'object';

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goTo = (index) => setCurrentIndex(index);

  const current = isObject ? images[currentIndex] : { src: images[currentIndex], title: '', description: '' };

  return (
    <div id="carousel-container">
      <div className="carousel-slide">
        <img src={current.src} alt={current.title || `Slide ${currentIndex + 1}`} />
        <div className="carousel-controls">
          <button onClick={prevSlide} aria-label="Anterior">‹</button>
          <button onClick={nextSlide} aria-label="Próximo">›</button>
        </div>
      </div>

      {isObject && (
        <div className="carousel-meta">
          <div className="carousel-description">
            <h4>{current.title}</h4>
            <p>{current.description}</p>
          </div>

          <div className="carousel-thumbnails">
            {images.map((img, idx) => (
              <button
                key={idx}
                className={`thumb ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Ir para ${img.title || `slide ${idx + 1}`}`}
              >
                <img src={img.src} alt={img.title || `thumb ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;