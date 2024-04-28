import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiMsqlServer,
  DiReact,
  DiBootstrap,
  DiJqueryLogo,
  DiJava,
  DiPython,
  DiSass
} from "react-icons/di"
import { SiPhp, SiDart, SiFlutter, SiVuedotjs, SiLaravel, SiGit } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "php", name: "PHP", icon: <SiPhp />, textHover: "Nível Avançado" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, textHover: "Nível Intermediário" },
  { id: "dart", name: "Dart", icon: <SiDart />, textHover: "Nível Avançado" },
  { id: "flutter", name: "Flutter", icon: <SiFlutter />, textHover: "Nível Avançado" },
  { id: "java", name: "Java", icon: <DiJava />, textHover: "Nível Básico" },
  { id: "python", name: "Python", icon: <DiPython />, textHover: "Nível Curioso" },
  { id: "sql", name: "SQL", icon: <PiFileSql /> , textHover: "Nível Intermediário" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, textHover: "Nível Intermediário" },
  { id: "sqlserver", name: "SQLServer", icon: <DiMsqlServer />, textHover: "Nível Intermediário" },
  { id: "html", name: "HTML5", icon: <DiHtml5 />, textHover: "Nível Intermediário" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, textHover: "Nível Intermediário" },  
  { id: "laravel", name: "Laravel", icon: <SiLaravel />, textHover: "Nível Intermediário" },
  { id: "react", name: "React", icon: <DiReact />, textHover: "Nível Básico" },
  { id: "vue", name: "VueJS", icon: <SiVuedotjs />, textHover: "Nível Básico" },  
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, textHover: "Nível Avançado" },
  { id: "sass", name: "SASS", icon: <DiSass />, textHover: "Nível Iniciante" },
  { id: "jquery", name: "Jquery", icon: <DiJqueryLogo />, textHover: "Nível Avançado" },
  { id: "git", name: "Git", icon: <SiGit />, textHover: "Nível Básico" },
  
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Profissional</h2>
      <h3>🎯💻Quem é o Maycon enquanto profissional?</h3>
      <p>&emsp;Possuo habilidades necessárias para o desenvolvimento de sites, aplicações e aplicativos;</p>
      <p>&emsp;Experiência com PHP e Flutter onde desenvolvi um projeto pessoal que está online e publicado na Google Play, um sistema completo com aplicativo, integrados por uma API desenvolvida em PHP, a plataforma Recicladarte;</p>
      <p>&emsp; Obtive uma experiência boa no desenvolvimento em equipe nas últimas empresas de tecnologia em que trabalhei, em uma construí telas no sistema novo e no legado Java, já em outra empresa participei do desenvolvimento da base de um aplicativo novo com Flutter e aprimoramento de outro aplicativo com a mesma tecnologia;</p>
      <p>&emsp;Formado em ADS concluído no final do 1º semestre de 2023, possuo também 2 certificados de cursos presenciais o mais recente é da DevAcademy cursado na empresa Edusoft voltado para Java em 2023 e PHP cursado no programa Entra21 em 2016 além de cursos online como desenvolvimento avançado em PHP realizado na plataforma DIO entre outros, estou sempre buscando me atualizar e evoluir.</p>
      
      <h3>Arquitetura e organização</h3>
      <ul className="list-architecture-and-organization">
        <li>MVC, Módulos, baixo acoplamento e alta coesão;</li>
        <li>kanban e Scrum Básico;</li>
        <li>Geralmente utilizo VS CODE, Workbench, Canva, Hostgator, Cloudflare, GitHub e Git para desenvolver projetos;</li>
        <li>Estou usando Bitrix24 para criar quadros kanban, Obsidian para anotações e diagrams.net para UML.</li>
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