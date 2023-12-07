
import React, { useState } from 'react';
import Carousel from "./Carousel"
import "../styles/components/projectsContainer.sass"

const ProjectsContainer = () => {
  const recicladarteSite = [
    "/img/recicladarte/site/home.PNG",
    "/img/recicladarte/site/diy.PNG",
    "/img/recicladarte/site/charges.PNG",
    "/img/recicladarte/site/login.PNG",
    "/img/recicladarte/site/cadastro.PNG"
  ];

  const devPegasus = [
    "/img/devpegasus/home_devpegasus.PNG",
    "/img/devpegasus/page_text_devpegasus.PNG"
  ];

  const receitasEdrinks = [
    "/img/receitas_e_drinks/site/homeReceitas.PNG",
    "/img/receitas_e_drinks/site/home_mobile.PNG",
    "/img/receitas_e_drinks/site/home_mobile2.PNG",
    "/img/receitas_e_drinks/site/home_mobile3.PNG"
  ];

  const sistemasDistribuidos = [
    "/img/modelo_php_flutter/app/login_v2.PNG",
    "/img/modelo_php_flutter/app/exemplo_edicao_de_postagem_parte_1.PNG",
    "/img/modelo_php_flutter/app/edicao_de_postagem_parte_2.PNG",
    "/img/modelo_php_flutter/app/exclusao_de_postagem_parte_1.PNG",
    "/img/modelo_php_flutter/site/home.PNG",
    "/img/modelo_php_flutter/site/janela_de_login_e_cadastro_de_usuario_parte_1.PNG",
    "/img/modelo_php_flutter/site/painel_de_usuario_parte_1.PNG"  
  ];  


  const aplicativoRecicladArte = [
    "/img/recicladarte/app/home.jpg",
    "/img/recicladarte/app/charges.jpg",
    "/img/recicladarte/app/quiz.jpg",
  ];

  const sistemaJava = [
    "/img/sistema_java/login.PNG",
    "/img/sistema_java/painel.PNG",
    "/img/sistema_java/cadastros.jpeg",
    "/img/sistema_java/cadastro_de_clientes.jpeg"
  ];

  const sistemaCRUDLaravelVueJS = [
    "/img/sistema_crud_laravel_vuejs/lista_de_contatos.png",
    "/img/sistema_crud_laravel_vuejs/adicionar_contatos.png",
    "/img/sistema_crud_laravel_vuejs/editar_contato.png"
  ];


  // Estados separados para cada projeto
  const [showDetailsRecicladArte, setShowDetailsRecicladArte] = useState(false);
  const [showDetailsDevPegasus, setShowDetailsDevPegasus] = useState(false);
  const [showDetailsReceitasEdrinks, setShowDetailsReceitasEdrinks] = useState(false);
  const [showDetailsSistemasDistribuidos, setShowDetailsSistemasDistribuidos] = useState(false);
  const [showDetailsAplicativoRecicladArte, setShowDetailsAplicativoRecicladArte] = useState(false);
  const [showDetailsSistemaEmJava, setShowDetailsSistemaEmJava] = useState(false);
  const [showDetailsSistemaCRUDLaravelVueJS, setShowDetailsSistemaCRUDLaravelVueJS] = useState(false);
  

  const handleCloseDetails = (project) => {
    if (project === "recicladarte") {
      setShowDetailsRecicladArte(false);
    } else if (project === "devpegasus") {
      setShowDetailsDevPegasus(false);
    }else if(project === "receitasedrinks"){
      setShowDetailsReceitasEdrinks(false);
    }else if(project === "sistemasdistribuídos"){
      setShowDetailsSistemasDistribuidos(false);
    }else if(project === "aplicativorecicladarte"){      
      setShowDetailsAplicativoRecicladArte(false);
    }else if(project === "sistemaemjava"){
      setShowDetailsSistemaEmJava(false);
    }else if(project === "sistemacrudlaravelvuejs"){
      setShowDetailsSistemaCRUDLaravelVueJS(false);
    }
  };

  return (
    <section id="projects-container">
      <h2>Projetos</h2>
      <div className="row">
        <div className="project-card">
          <h3>Site RecicladArte</h3>
          <p>&emsp;Site com conteúdos relacionados a ecologia, sustentabilidade, meio ammbiente, reutilização, a ideia é expandir e virar uma plataforma com mais interações entre usuários, onde um certo tipo de usuário vai poder empreender de forma consciente e a favor ao meio ambiente, e o outro tipo ira contribuir mas também será incentivado de uma certa forma.</p>
          <Carousel images={recicladarteSite} />
          <button onClick={() => setShowDetailsRecicladArte(true)} className='btn-see-projects'>Ver Mais</button>
        </div>
        <div className="project-card">
          <h3>Aplicativo - RecicladArte</h3>
          <p>&emsp;1ª versão do app com o objetivo de facilitar o acesso a plataforma recicladarte, totalmente integrado com o site utilizando API PHP, consumida no Flutter por este aplicativo é construído nesta tecnologia.</p>
          <Carousel images={aplicativoRecicladArte} />
          <button onClick={() => setShowDetailsAplicativoRecicladArte(true)} className='btn-see-projects'>Ver Mais</button>
        </div>
        <div className="project-card">
          <h3>Site Dev Pegasus</h3>
          <p>&emsp;Site com objetivo de fornecer ferramentas para desenvolvedores, web designers, criadores de conteúdo e programadores, surgiu por uma experiencia de não basta só você saber desenvolver é necessário também que você consiga "vender o seu peixe", porque no final das contas você precisa chamar e manter os usuários no software para que tenha sucesso.</p>
          <Carousel images={devPegasus} />
          <button onClick={() => setShowDetailsDevPegasus(true)} className='btn-see-projects'>Ver Mais</button>
        </div>
        <div className="project-card">
          <h3>Site Receitas e Drinks</h3>
          <p>&emsp;Site com receitas de comidas e bebidas, possui sua usabilidade um pouco mais voltada para o mobile, a princípio tinha-se o objetivo de disponibilizar recursos premium para usuários que assinassem a plataforma, mas o projeto esta um pouco parado para focar na construção da plataforma Recicladarte que inclui upgrade no site e desenvolvimento do app.</p>
          <Carousel images={receitasEdrinks} />
          <button onClick={() => setShowDetailsReceitasEdrinks(true)} className='btn-see-projects'>Ver Mais</button>
        </div>
        <div className="project-card">
          <h3>Modelo de sistema PHP e Flutter</h3>
          <p>&emsp;São dois repositórios de sistemas distribuídos no GitHub contendo duas bases, uma para site PHP e outra para aplicativo Flutter que funcionam de forma integrada, juntamente com as documentações com as tecnologias usadas, informações para instalar, o que é necessário rodar os projetos e imagens ilustrativas.</p>
          <Carousel images={sistemasDistribuidos} />
          <button onClick={() => setShowDetailsSistemasDistribuidos(true)} className='btn-see-projects'>Ver Mais</button>
        </div>        
        <div className="project-card">
          <h3>Sistema em Java</h3>
          <p>&emsp;Sistema Java WEB desenvolvido em grupo para apresentar no 5ª seminário da faculdade no curso de Análise e desenvolvimento de sistemas.</p>
          <Carousel images={sistemaJava} />
          <button onClick={() => setShowDetailsSistemaEmJava(true)} className='btn-see-projects'>Ver Mais</button>
        </div>
        <div className="project-card">
          <h3>Sistema CRUD de contatos desenvolvido com back-end Laravel e front-end VueJS</h3>
          <p>&emsp;Sistema de gerenciamento de contatos utilizando as tecnologias PHP/Laravel no back-end e VueJS no front-end. Ambas as partes estão integradas no repositório crud_contatos_laravel_vue. O sistema possibilita listar, adicionar, editar e deletar os contatos cadastrados no banco de dados MySQL.</p>
          <Carousel images={sistemaCRUDLaravelVueJS} />
          <button onClick={() => setShowDetailsSistemaCRUDLaravelVueJS(true)} className='btn-see-projects'>Ver Mais</button>
        </div>
        <div className="project-card">
          <h3>Site Portfólio</h3>
          <p>
            &emsp;Este site portfólio foi construído com o intuito de mostrar um pouco sobre os projetos que desenvolvi. As tecnologias usadas no projeto são: Javascript, ReactJS, SASS, GIT, está hospedado no GitHub Pages com acesso ao código público.
            <br/>
            Aqui está o <a href="https://github.com/Maycon-crz" target="_blank">Link</a> para o repositório do site portfólio.
            <br/><br/><br/>
            Aplicativo - Receitas e Drinks (Em breve)
            <br/><br/>
            &emsp;Após criar a API para retornar os dados do site receitas e drinks, o objetivo é criar um aplicativo Flutter para que possa facilitar o acesso as receitas, podendo também ter uma melhor ergonomia para que os usuários possam adotar o aplicativo como favorito.
          </p>
        </div>        
      </div>
      {/* Renderizar a janela de detalhes para cada projeto */}
      {showDetailsRecicladArte && (
        <div className="project-details">
          <button onClick={() => handleCloseDetails("recicladarte")}>X</button>
          <h3>Site RecicladArte</h3>
          <p><a href="https://www.recicladarte.com/" target="_blank">www.recicladarte.com</a></p>
          <h4>Tecnologias usadas no projeto RecicladArte</h4>
          <ul>
            <li>PHP</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Composer</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
          </ul>
          <h4>Funções</h4>
          <ul>
            <li>Listagem: de postagens, DIY(Faça você mesmo), API de noticias IBGE, charges,  cursos, API de calota polar, API de óxido nitroso, API de concentração de metano e páginas com informações estáticas sobre metal, papel, madeira, plástico, vidro e lixo não reciclavel.</li>
            <li>Login e cadastro de usuários novos;</li>
            <li>Usuário comum;</li>
            <li>Usuário administrador;</li>
            <li>Alteração de senha e exclusão de conta;</li>
            <li>Cadastro e edição de: postagens, charges, parceiros, destaques, charges e anúncios;</li>
            <li>Análise de dados;</li>
          </ul>
          <Carousel images={recicladarteSite} />
        </div>
      )}
      {showDetailsAplicativoRecicladArte && (                
        <div className="project-details">
          <button onClick={() => handleCloseDetails("aplicativorecicladarte")}>X</button>
          <h3>Aplicativo Recicladarte</h3>
          <p><a href="https://play.google.com/store/apps/details?id=com.recicladarte.app_recicladarte" target="_blank">Link do aplicativo na google play</a></p>
          <h4>Tecnologias usadas no  projeto App Recicladarte</h4>
          <ul>
            <li>Dart</li>
            <li>Flutter</li>
            <li>Consumo de API do site Recicladarte</li>
            <li>GetX</li>
            <li>JWT</li>
          </ul>          
          <Carousel images={aplicativoRecicladArte} />
        </div>
      )}
      {showDetailsDevPegasus && (
        <div className="project-details">
          <button onClick={() => handleCloseDetails("devpegasus")}>X</button>
          <h3>Site DevPegasus</h3>
          <p><a href="https://www.devpegasus.com/" target="_blank">www.devpegasus.com</a></p>
          <h4>Tecnologias usadas no  projeto Dev Pegasus</h4>
          <ul>
            <li>PHP</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Composer</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
          </ul>
          <h4>Funções</h4>
          <ul>
            <li>Listagem de postagens;</li>
            <li>Login para usuário administrador;</li>
            <li>Cadastro e edição de postagens;</li>
            <li>Páginas: Ferramentas de texto, Dicas e Conhecimento, Palheta de Cores</li>
          </ul>
          <Carousel images={devPegasus} />
        </div>
      )}
      {showDetailsReceitasEdrinks && (
        <div className="project-details">
          <button onClick={() => handleCloseDetails("receitasedrinks")}>X</button>
          <h3>Site Receitas e Drinks</h3>
          <p><a href="https://receitasedrinks.com/" target="_blank">receitasedrinks.com</a></p>
          <h4>Tecnologias usadas no  projeto Receitas e Drinks</h4>
          <ul>
            <li>PHP</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Composer</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
          </ul>
          <Carousel images={receitasEdrinks} />
        </div>
      )}
      {showDetailsSistemasDistribuidos && (                
        <div className="project-details">
          <button onClick={() => handleCloseDetails("sistemasdistribuídos")}>X</button>
          <h3>Modelo de sistema PHP e Flutter</h3>          
          <p><a href="https://github.com/Maycon-crz/modelo_de_sistema_php_com_api" target="_blank">Repositório no GitHub</a></p>
          <h4>Tecnologias usadas no  projeto Modelos de sistema</h4>
          <ul>
            <li>PHP</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Composer</li>
            <li>Bootstrap</li>
            <li>Jquery</li>
            <li>Dart</li>
            <li>Flutter</li>          
            <li>GetX</li>
            <li>JWT</li>
          </ul>
          <h4>Funções</h4>
          <Carousel images={sistemasDistribuidos} />
        </div>
      )}      
      {showDetailsSistemaEmJava && (                
        <div className="project-details">
          <button onClick={() => handleCloseDetails("sistemaemjava")}>X</button>
          <h3>Sistema em Java - apresentado no semínário da faculdade</h3>
          <h4>Tecnologias usadas no sistema em Java para a semínário da faculdade</h4>
          <ul>
            <li>Java</li>
            <li>JSF</li>
            <li>JSP</li>
            <li>PrimeFaces</li>
            <li>Hibernate</li>
            <li>MySQL</li>
          </ul>
          <Carousel images={sistemaJava} />
        </div>
      )}
      {showDetailsSistemaCRUDLaravelVueJS && (                
        <div className="project-details">
          <button onClick={() => handleCloseDetails("sistemacrudlaravelvuejs")}>X</button>
          <h3>Sistema CRUD de contatos desenvolvido com back-end Laravel e front-end VueJS</h3>
          <p><a href="https://github.com/Maycon-crz/crud_contatos_laravel_vue/tree/master" target="_blank">Repositório no GitHub</a></p>
          <h4>Tecnologias usadas no sistema:</h4>
          <ul>
            <li>PHP 8.1.4</li>
            <li>Laravel</li>
            <li>Composer</li>
            <li>MySQL</li>
            <li>@vue/cli 5.0.8</li>
            <li>Node</li>
            <li>Apache + Workbench ou xampp e phpmyadmin</li>
            <li>Navegador de internet</li>
          </ul>
          <Carousel images={sistemaCRUDLaravelVueJS} />
        </div>
      )}      
    </section>
  )
}

export default ProjectsContainer