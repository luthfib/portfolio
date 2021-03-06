import styles from "./common.module.scss";
import { useAnimateOnViewport } from "../../../lib/hooks";
import { useRef } from "react";

export const Attribute = ({ heading, description }) => {
  const ref = useRef(null);
  useAnimateOnViewport(ref);

  return (
    <div ref={ref} className={styles.attribute}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export const ExperienceTimelineHeader = ({
  year,
  role,
  gradient = styles.blueGradient,
}) => {
  const ref = useRef(null);
  useAnimateOnViewport(ref);
  return (
    <div ref={ref} className={styles.containerHeader}>
      <span className={styles.line}></span>
      <div className={styles.circle}> </div>
      <p>{year}</p>
      <h2 className={gradient}>{role}</h2>
    </div>
  );
};
