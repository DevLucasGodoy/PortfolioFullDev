import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="
        Lucas Godoy é um ávido desenvolvedor web full stack que cria sites e aplicativos que você adoraria usar."
      />
      <meta property="og:title" content="Portfólio de Lucas Godoy" />
      <meta
        property="og:description"
        content="Portfólio de Lucas Godoy, desenvolvedor web Full Stack."
      />
      <meta property="og:url" content="https://portfolio-dev-lucas-godoy.vercel.app/" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Lucas Godoy',
};
