import styles from "./common.module.scss";

export const Attribute = ({ heading, description }) => (
  <div className={styles.attribute}>
    <h3>{heading}</h3>
    <p>{description}</p>
  </div>
);

export const ExperienceTimelineHeader = ({
  year,
  role,
  gradient = styles.blueGradient,
}) => (
  <div className={styles.containerHeader}>
    <span className={styles.line}></span>
    <div className={styles.circle}> </div>
    <h2 className={gradient}>{year}</h2>
    <p>{role}</p>
  </div>
);
