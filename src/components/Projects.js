import styles from "./Projects.module.css";

import { projects } from "../content/projects";


export const Projects = () => {
 
  return (
    
    <section className={styles.wrapper}>
      {/* <p>Visit plainenglish.io in a new tab</p>{" "}
      <button
        role="link"
        onClick={() => openInNewTab("https://plainenglish.io")}
      >
        Visit
      </button> */}
      {projects.map((project, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.info}>
              <img className={styles.image} src={project.image} alt="cover" />
            </div>
          
            <div className={styles.info}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <br></br>
              <a href= {project.hyperlink} rel="noreferrer" target="_blank">
              <p className={styles.description}>Check it out</p>
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};