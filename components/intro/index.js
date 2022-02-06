import { Terminal } from "../terminal";
import styles from "./intro.module.scss";

export const Intro = () => (
  <section className={styles.intro}>
    <div className={styles.introText}>
      <h1>Luthfi Bustillos</h1>
      <p>
        I am full-stack developer, born in Ecuador and residing in the United
        States
      </p>
      <p>
        I am most interested in building innovative user experiences and giving
        users that wow experience
      </p>
    </div>

    <Terminal />
  </section>
);
