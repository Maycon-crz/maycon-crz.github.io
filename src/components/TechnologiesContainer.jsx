import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiBootstrap,
  DiJqueryLogo,
} from "react-icons/di"
import { SiPhp, SiDart, SiFlutter } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "php", name: "PHP", icon: <SiPhp /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "dart", name: "Dart", icon: <SiDart /> },
  { id: "flutter", name: "Flutter", icon: <SiFlutter /> },
  { id: "sql", name: "SQL", icon: <PiFileSql />  },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },  
  { id: "jquery", name: "Jquery", icon: <DiJqueryLogo /> },    
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Profissional</h2>
      <h3>🎯💻Quem é o Maycon enquanto profissional?</h3>
      <p>&emsp;Tenho habilidades necessárias para o desenvolvimento de sites, sistemas web e aplicativos, experiência recente com Flutter onde desenvolvi um sistema completo para windows consumindo API desenvolvida em PHP, consegui ter uma boa experiência no desenvolvimento em equipe na última empresa que trabalhei, participei do desenvolvimento da base de um aplicativo novo com Flutter nesta empresa e aprimoramento de outro app com a mesma tecnologia, estou no último semestre de ADS, possuo certificado em PHP cursado no programa Entra21 em 2016 e de cursos online mais recentes como, desenvolvimento avançado em PHP realizado na plataforma DIO, buscando sempre se atualizar.</p>
      <h3>Arquitetura e organização</h3>
      <ul className="list-architecture-and-organization">
        <li>MVC, Módulos, baixo acoplamento e alta coesão;</li>
        <li>kanban e Scrum Básco;</li>
        <li>Geralmente utilizo VS CODE, Workbench, Canva, Hostgator, Cloudflare,
          GitHub e Git para desenvolver projetos;</li>
        <li>Estou desenvolvendo um sistema que funciona como assistente pessoal;
        </li>
      </ul>
      <h3>Tecnologias</h3>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>            
            <div className="technology-info">
              {tech.icon}
              <h4>{tech.name}</h4>
            </div>
          </div>
        ))}
      </div>      
    </section>
  );
}

export default TechnologiesContainer