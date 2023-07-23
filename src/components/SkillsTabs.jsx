import React, { useState } from 'react';
import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'

import "../styles/components/skillsTabs.sass";

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState('soft');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item" id="topo">
          <button
            className={`nav-link ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => handleTabChange('soft')}
          >
            Soft Skills
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'hard' ? 'active' : ''}`}
            onClick={() => handleTabChange('hard')}
          >
            Hard Skills
          </button>
        </li>
        <li className="nav-item">
          <a href="#projects-container">
            <button className={`nav-link`}>
                Projetos
            </button>
          </a>
        </li>
        <li className="nav-item">
          <a href="#certificates-carousel-container">
            <button className={`nav-link`}>
                Certificados
            </button>
          </a>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === 'soft' && (
          <div className="tab-pane fade show active" id="softSkills">
            {/* Conteúdo da aba Soft Skills */}
            <AboutContainer />
          </div>
        )}

        {activeTab === 'hard' && (
          <div className="tab-pane fade show active" id="hardSkills">
            {/* Conteúdo da aba Hard Skills */}
            <TechnologiesContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsTabs;
