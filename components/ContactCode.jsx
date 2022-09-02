import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'lucas.moraes.godoy@gmail.com',
    href: 'mailto:lucas.moraes.godoy@gmail.com',
  },
  {
    social: 'github',
    link: 'DevLucasGodoy',
    href: 'https://github.com/DevLucasGodoy',
  },
  {
    social: 'linkedin',
    link: 'Lucas Godoy',
    href: 'https://www.linkedin.com/in/lucas-godoy-84091021b/',
  },
  {
    social: 'instagram',
    link: 'DevLucasGodoy',
    href: 'https://www.instagram.com/devlucasgodoy/',
  },
  {
    social: 'telegram',
    link: 'DevLucasGodoy',
    href: 'https://t.me/DevLucasGodoy',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
