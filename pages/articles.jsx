import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import React, { useEffect, useRef } from "react";
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
      🚧  Página em Produção  🚧
      </h3>
      <br/>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
      <div style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
        }}>
          <Viewer fileUrl="../pages/curriculo/Curriculo.pdf" />
          </div>
      </Worker>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Currículo' },
  };
}

export default ArticlesPage;
