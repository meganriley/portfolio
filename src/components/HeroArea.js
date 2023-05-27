import styles from "./HeroArea.module.css";

export const HeroArea = () => {
  return (
    <section className={styles.wrapper}>
      <img className={styles.profile} src="/assets/girl.png" alt="profile" />
      <h1 className="title">Hi, I'm Megan (but you can call me Meg!)</h1>
      <p className="description">
        I'm a self-taught software engineer looking for a new role in tech
      </p>
      <div className={styles.buttonBox}>
        <button
          className={`${styles.button} ${styles.project}`}
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          My projects
        </button>
        <button
          className={`${styles.button} ${styles.hire}`}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Message Me
        </button>
      </div>
    </section>
  );
};