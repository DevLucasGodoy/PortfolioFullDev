import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
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
    props: { title: 'GitHub' },
  };
}

export default GithubPage;
