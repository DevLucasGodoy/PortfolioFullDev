import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import React, { useEffect, useRef } from "react";

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h1>Lucas Moraes Godoy</h1>
      <h2>Full Stack Developer</h2>
      <br/>
      <h3>FORMAÇÃO</h3>
      <br/>
      <p><b>Colégio Técnico Bento Quirino - Campinas, SP -  Ensino Médio Técnico Integrado</b></p>
      <p>FEVEREIRO DE 2019 - JULHO DE 2019</p>
      <p>Iniciei o ensino médio juntamente com o curso técnico de informática, onde fiz apenas o primeiro semestre, aprendendo apenas o básico da lógica de programação e números binários.</p>
      <br/>
      <p><b>Instituto Federal do Mato Grosso do Sul - Nova Andradina, MS - Ensino Médio Técnico Integrado</b></p>
      <p>JULHO DE 2019 - DEZEMBRO DE 2022</p>
      <p>Depois da minha mudança de cidade continuei meus estudos tanto no ensino médio quanto o curso técnico integrado de informática no IFMS, sendo aqui onde eu aprofundei meus conhecimentos e me interessei ainda mais pela área de programação.</p>
      <br/>
      <h3>EXPERIÊNCIA</h3>
      <br/>
      <p><b>Freelancer de Projetos</b></p>
      <p>DESDE DE JUNHO DE 2021</p>
      <p>Comecei fazendo um site para uma empresa local e gostei demais de desenvolver um projeto avançado e publicar na internet. Desde então estou cadastrado nos melhores sites de freelancer buscando sempre novos projetos e oportunidades.</p>
      <br/>
      <p><b>Estágio na Ganso Sistemas</b></p>
      <p>DESDE DE SETEMBRO DE 2022</p>
      <p>Uma das etapas para a formação no Instituto Federal é a realização do estágio em uma empresa parceira. Na Ganso Sistemas eu recebi treinamento durante 3 meses sobre todo o software da empresa e após esse treinamento ingressei no cargo de estagiário em análise de suporte.</p>
      <br/>
      <h3>COMPETÊNCIAS</h3>
      <br/>
      <p><b>Linguagens de Marcação</b></p>
      <p>HTML, CSS, Sass e LaTeX.</p>
      <br/>
      <p><b>Linguagens de Programação</b></p>
      <p>C/C++,  JavaScript, React.js, React Native, Node.js e Next.js.</p>
      <br/>
      <p><b>Banco de Dados</b></p>
      <p>MySQL, MongoDB, SQLite  e PostgreSQL. </p>
      <br/>
      <p><b>Cloud</b></p>
      <p>Azure e AWS</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Currículo' },
  };
}

export default ArticlesPage;
