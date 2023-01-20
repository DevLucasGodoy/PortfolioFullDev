const AboutPage = () => {
  return (
    <>
      <h2>Um Pouco Mais Sobre Mim</h2>
      <br />
      <p>
        Eu me chamo Lucas Moraes Godoy, natural de Campinas(SP), nascido em 2004, comecei 
        minha trajetória do mundo da programação no ano de 2019 quando ingressei no colégio 
        técnico Bento Quirino para realizar o ensino médio juntamente com o curso técnico em 
        informática. Na época eu acabei escolhendo esse curso não por ser o que eu queria, mas 
        por ser orientado e aconselhado por familiares e amigos que que trabalham nessa área me 
        convenceram de que eu me sairia muito bem nessa área da programação e do desenvolvimento e 
        colheria os frutos positivos dessa escolha e é o que vem acontecendo.
      </p>
      <br />
      <p>
        Por motivos familiares eu acabei me mudando para o interior para Nova Andradina(MS) onde eu 
        ingressei no Instituto Federal do Mato Grosso do Sul para finalizar o ensino médio também com 
        o curso técnico em informática integrado. Foi aqui que o meu interesse pela programação acabou 
        crescendo ainda mais. No período da pandemia aproveitei muito bem o meu tempo livre para aprender 
        mais ainda sobre linguagens de programação e me aprofundar em Javascript, HTML e CSS.
      </p>
      <br />
      <p>
        Com o passar do curso eu acabei me aprofundando bastante em algumas linguagens de programação como 
        React.js, React Native, Node.js e Next.js. Me aprofundei também em relação a banco de dados e serviços 
        de Cloud com o principal objetive de me tornar um desenvolvedor fullstack. 
      </p>
      <br />
      <p>
        Um dos processos para finalização do curso integrado de informática no Instituto Federal do Mato Grosso do 
        Sul é a elaboração do famoso TCC. Com o objetivo de me aprofundar em outras tecnologias para programação escolhi 
        o tema Análise das Características de Frameworks Javascript onde eu e meu colega de curso discutimos sobre os frameworks 
        React, Vue e Angular.
      </p>
      <br />
      <p>
        Desde então sigo realizando estágio na empresa Ganso Sistemas como analista de suporte e nas horas 
        vagas trabalho como freelancer de projetos web, através do site da <a href="https://devetech.vercel.app/">Dev & Tech</a>, 
        com o principal objetivo buscar novos desafios e experiencia para me desenvolver cada vez mais como um profissional completo 
        no mundo da programação.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
