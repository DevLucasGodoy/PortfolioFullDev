import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Full Stack</h1>
          <h1>Developer</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Lucas Godoy</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>Meus Projetos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Entre em Contato</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
