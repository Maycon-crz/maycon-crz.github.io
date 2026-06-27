import React from 'react'
import Carousel from './Carousel'
import projectsCompanies from '../data/projectsCompanies'
import '../styles/components/projectsContainer.sass'
import '../styles/components/companyProjects.sass'

const CompanyProjects = () => {
  return (
    <section id="company-projects-container">
      <h2>Empresas que atuei</h2>
      <div className="row">
        {projectsCompanies.map((p) => (
          <div className="project-card" key={p.id}>
            <h3><strong>{p.company}</strong> — {p.role} ({p.period})</h3>
            <p>{p.description}</p>
            {p.technologies && (
              <p className="height-auto">Tecnologias: {p.technologies.join(', ')}</p>
            )}
            <h4>{p.projectTitle}</h4>
            {p.images && p.images.length > 0 && <Carousel images={p.images} showSlide={false} />}
          </div>
        ))}
        
      </div>
    </section>
  )
}

export default CompanyProjects
