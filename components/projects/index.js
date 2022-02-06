import styles from "./projects.module.scss";

const Project = ({ name, descripton, src, altSrc }) => (
  <div className={styles.project}>
    <img src={src} alt={altSrc} />
    <h3>{name}</h3>
    <p>{descripton}</p>
  </div>
);

export const Projects = () => (
  <section className={styles.projectsSection}>
    <h1>Major Projects</h1>
    <div className={styles.projects}>
      <Project
        name="Borneo Football"
        descripton={
          "Modernized tech stack to increase web performance vitals and give fresh look"
        }
        src={"/icons/borneo.svg"}
        altSrc={"borneo football icon"}
      />
      <Project
        name="Language Service Solutions"
        descripton={
          "Modernized tech stack to increase web performance vitals and give fresh look"
        }
        src={"/icons/languageServiceSolutions.svg"}
        altSrc={"language service solutions icon"}
      />
      <Project
        name="Registation System"
        descripton={
          "Registration system for an event hosting 1000+ participants from 20+ nations."
        }
        src={"/icons/subud2.svg"}
        altSrc={"subud icon"}
      />
    </div>
  </section>
);
