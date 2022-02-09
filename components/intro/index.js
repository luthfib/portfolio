import { Terminal } from "../terminal";
import styles from "./intro.module.scss";

export const Intro = () => (
  <section className={styles.intro}>
    <div className={styles.introText}>
      <h1>Luthfi Bustillos</h1>
      <p>
        I am a full-stack developer with experience in backend, frontend and
        UI/UX with a focus on creating smooth user interfaces from start to
        finish.
      </p>
      <p>Generally I enjoy coding and solving user problems.</p>
    </div>

    <Terminal />
  </section>
);
