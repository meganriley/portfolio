import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Megan Riley</h1>
      <p>Chicago, IL USA</p>
      <p>+012 345 67890 | info@domain.com</p>
      <div className={styles.socials}>
        <img
          src="/assets/socials/twitter.png"
          alt="social-icon"
          className={styles.icon}
        />
        <a href="https://www.linkedin.com/in/meganriley1/" rel="noreferrer" target="_blank">
        <img
          src="/assets/socials/linkedin.png"
          alt="social-icon"
          className={styles.icon}
        />
        </a>
        <a href="https://www.github.com/meganriley/" rel="noreferrer" target="_blank">
        <img
          src="/assets/socials/github.png"
          alt="social-icon"
          className={styles.icon}
        />
        </a>
      </div>
    </footer>
  );
};