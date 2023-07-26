import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiBootstrap,
  DiJqueryLogo,
  DiJava,
  DiPython,
  DiSass
} from "react-icons/di"
import { SiPhp, SiDart, SiFlutter } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "php", name: "PHP", icon: <SiPhp />, textHover: "Nível Avançado" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, textHover: "Nível Intermediário" },
  { id: "dart", name: "Dart", icon: <SiDart />, textHover: "Nível Avançado" },
  { id: "flutter", name: "Flutter", icon: <SiFlutter />, textHover: "Nível Avançado" },
  { id: "java", name: "Java", icon: <DiJava />, textHover: "Nível Básico" },
  { id: "python", name: "Python", icon: <DiPython />, textHover: "Nível Iniciante" },
  { id: "sql", name: "SQL", icon: <PiFileSql /> , textHover: "Nível Intermediário" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, textHover: "Nível Intermediário" },
  { id: "html", name: "HTML5", icon: <DiHtml5 />, textHover: "Nível Intermediário" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, textHover: "Nível Intermediário" },
  { id: "sass", name: "SASS", icon: <DiSass />, textHover: "Nível Iniciante" },
  { id: "react", name: "React", icon: <DiReact />, textHover: "Nível Básico" },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, textHover: "Nível Avançado" },
  { id: "jquery", name: "Jquery", icon: <DiJqueryLogo />, textHover: "Nível Avançado" },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Profissional</h2>
      <h3>🎯💻Quem é o Maycon enquanto profissional?</h3>
      <p>&emsp;Possuo habilidades necessárias para o desenvolvimento de sites, sistemas web e aplicativos, experiência recente com Flutter onde desenvolvi um sistema completo para windows consumindo API desenvolvida em PHP, consegui ter uma boa experiência no desenvolvimento em equipe na última empresa que trabalhei, participei do desenvolvimento da base de um aplicativo novo com Flutter nesta empresa e aprimoramento de outro app com a mesma tecnologia, tecnólogo ADS concluído no 1º semestre de 2023, possuo certificado em PHP cursado no programa Entra21 em 2016 e de cursos online mais recentes como, desenvolvimento avançado em PHP realizado na plataforma DIO, busco sempre me atualizar.</p>
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
            <div className="overlay-text">
              <p>{tech.textHover}</p>
            </div>
          </div>
        ))}
      </div>      
    </section>
  );
}

export default TechnologiesContainer