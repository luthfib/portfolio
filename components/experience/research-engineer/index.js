import { Attribute, ExperienceTimelineHeader } from "../common";

import styles from "../common/common.module.scss";

export const ResearchEngineer = () => (
  <div className={styles.container}>
    <ExperienceTimelineHeader
      year={"2020"}
      role={"Research Engineer - RENCI"}
      gradient={styles.purpleGradient}
    />
    <div className={styles.grid}>
      <Attribute
        heading={"Designed"}
        description={"Designed and implemented scalable software architecture"}
      />
      <Attribute
        heading={"Troubleshot"}
        description={
          "Troubleshot production errors to mitigate end user impact"
        }
      />
      <Attribute
        heading={"Collaborated"}
        description={
          "Collaborated with team members & stakeholders to provide high quality user experience"
        }
      />
      <Attribute
        heading={"Wrote"}
        description={"Wrote technical documentation for newly created apps"}
      />
      <Attribute
        heading={"Open-source"}
        description={"Wrote and developed various open-source repos"}
      />
      <Attribute
        heading={"Programmed"}
        description={"Programmed low-level and high-level code"}
      />
    </div>
  </div>
);
