import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import React, { useEffect, useRef } from "react";

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
      🚧  Página em Produção  🚧
      </h3>
      <br/>
      <p>
        Fique por dentro das novidades para não perder o lançamento da página.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Currículo' },
  };
}

export default ArticlesPage;
