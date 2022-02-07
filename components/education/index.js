import styles from "./education.module.scss";
import { useAnimateOnViewport } from "../../lib/hooks";
import { useRef } from "react";

export const Education = () => {
  const ref = useRef(null);
  useAnimateOnViewport(ref);

  return (
    <section className={styles.education}>
      <h1>Education</h1>
      <div ref={ref}>
        <h2>BS in Information Science</h2>
        <h3>University of North Carolina at Chapel Hill</h3>
      </div>
    </section>
  );
};
