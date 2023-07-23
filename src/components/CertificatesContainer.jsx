import React, { useState } from "react";
import "../styles/components/certificatesContainer.sass";

const CertificatesContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/img/certificates/php_avancado.PNG",
    "/img/certificates/inteligencia_artificial.PNG",
    "/img/certificates/lgpd.PNG",
    "/img/certificates/flutter_1.PNG",
    "/img/certificates/flutter_2.PNG",
    "/img/certificates/flutter_3.PNG",
    "/img/certificates/flutter_4.PNG",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div id="certificates-carousel-container">
      <h2>Certificados</h2>
      <div className="certificates-carousel-slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="certificates-carousel-controls">
          <button onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>            
          </button>
          <button onClick={nextSlide}>            
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesContainer;
