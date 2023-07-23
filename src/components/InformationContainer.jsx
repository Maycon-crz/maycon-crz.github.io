import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "../styles/components/informationcontainer.sass";

import Curriculum from "../assets/curriculums/curriculo_desenvolvedor_de_sistemas_maycon.pdf";

const InformationContainer = () => {
    const [isFixed, setIsFixed] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const breakpoint = 600; // Ajuste o valor para a posição em que a div deve se tornar fixa
        const isMobile = window.innerWidth < 1039; // Verifica se é mobile
  
        // Adicione ou remova a classe 'fixed' com base na posição do scroll e se não for mobile
        if (scrollY >= breakpoint && !isMobile) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      // Adicione o evento de scroll
      window.addEventListener("scroll", handleScroll);
  
      // Remova o evento de scroll ao desmontar o componente
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <section id="information" className={isFixed ? "fixed" : ""}>      
      <div className="info-card">
        <a href="https://wa.me/5547984369652" target="_blank" className="link-svg">
          <FaWhatsapp id="whatsapp-icon" />
        </a>
        <div>
          <h3>Telefone</h3>
          <p>+55 (47)98436-9652</p>
        </div>
      </div>
      <div className="info-card">
        <a href="mailto:mayconnascimentodeoliveira23@gmail.com"  target="_blank" className="link-svg">
          <AiOutlineMail id="email-icon" />
        </a>
        <div>
          <h3>E-mail</h3>
          <p id="email-address">mayconnascimentodeoliveira23@gmail.com</p>          
        </div>
      </div>
      <div className="info-card">
        <a href="https://www.google.com/maps?q=Blumenau,SC,Brasil"  target="_blank" className="link-svg">
          <AiFillEnvironment id="pin-icon" />
        </a>
        <div>
          <h3>Localização</h3>
          <p>Blumenau / SC</p>
        </div>
      </div>
      <div className="info-card center">
        <a href={Curriculum} className="btn" target="_blank">
          Baixar currículo
        </a>
      </div>
      <div className="info-card center">
        <a href="#topo">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
          </svg>          
        </a>
      </div>
    </section>
  );
};

export default InformationContainer;