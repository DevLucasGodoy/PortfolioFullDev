const AboutPage = () => {
  return (
    <>
      <h3>Um Pouco Mais Sobre Mim</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
