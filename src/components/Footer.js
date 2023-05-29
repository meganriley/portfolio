import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Megan Riley</h1>
      <p>Chicago, IL USA</p>
      <div className={styles.socials}>
        <a href="https://www.goodreads.com/user/show/19129168-megan" rel="noreferrer" target="_blank">
        <img
          src="/assets/socials/goodreads.svg"
          alt="social-icon"
          className={styles.icon}
        />
        </a>
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