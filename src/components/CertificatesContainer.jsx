import React, { useState, useMemo } from "react";
import "../styles/components/certificatesContainer.sass";

const CertificatesContainer = () => {
  const items = [
    { src: "/img/certificates/diploma_digital_rg_coberto.png", category: "Formação" },
    { src: "/img/certificates/certificado_imersao_mobile_flutter_alura.PNG", category: "Flutter" },
    { src: "/img/certificates/php_avancado.PNG", category: "PHP" },
    { src: "/img/certificates/certificado_ia_na_pratica_fundamentos_da_inteligencia_artificial.PNG", category: "IA" },
    { src: "/img/certificates/certificado_como_aproveitar_a_ia_para_estudar_melhor_treina_barasil.PNG", category: "IA" },
    { src: "/img/certificates/inteligencia_artificial.PNG", category: "IA" },
    { src: "/img/certificates/lgpd.PNG", category: "LGPD" },
    { src: "/img/certificates/flutter_1.PNG", category: "Flutter" },
    { src: "/img/certificates/flutter_2.PNG", category: "Flutter" },
    { src: "/img/certificates/flutter_3.PNG", category: "Flutter" },
    { src: "/img/certificates/flutter_4.PNG", category: "Flutter" },
  ];

  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = useMemo(() => {
    return activeCategory === "All" ? items : items.filter((i) => i.category === activeCategory);
  }, [items, activeCategory]);

  const nextSlide = () => {
    if (filtered.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex === filtered.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    if (filtered.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filtered.length - 1 : prevIndex - 1));
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <div id="certificates-carousel-container">
      <h2>Certificados</h2>

      <div className="certificates-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${cat === activeCategory ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="certificates-carousel-slide">
        {filtered.length > 0 ? (
          <img src={filtered[currentIndex].src} alt={`Certificado ${currentIndex + 1}`} />
        ) : (
          <div className="no-certificates">Nenhum certificado nesta categoria.</div>
        )}

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
