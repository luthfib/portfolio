import { Attribute, ExperienceTimelineHeader } from "../common";

import commonStyles from "../common/common.module.scss";
import styles from "./lead-engineer.module.scss";
import { useAnimateOnViewport } from "../../../lib/hooks";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  useAnimateOnViewport(ref);
  return (
    <div ref={ref} className={styles.skills}>
      <h3>Skills</h3>
      <p>
        React, Next.js, Typescript, Style-Components, React Testing Libary,
        Python, Docker, Kubernetes, CSS{" "}
      </p>
    </div>
  );
};

export const LeadEngineer = () => {
  return (
    <div className={commonStyles.container}>
      <ExperienceTimelineHeader
        year={"2021"}
        role={"Lead Software Engineer - Optum"}
      />
      <div className={commonStyles.grid}>
        <Attribute
          heading={"Developing"}
          description={
            "Developing and implementing internal company software and libraries"
          }
        />
        <Attribute
          heading={"Planning"}
          description={
            "Planning new sprints & delegating tasks to team members"
          }
        />

        <Skills />
        <Attribute
          heading={"Designing"}
          description={
            "Designing and implementing UI/UX designs for newly created app"
          }
        />
        <Attribute
          heading={"Implementing"}
          description={"Implementing designs to exact UI/UX requirements"}
        />
      </div>
    </div>
  );
};
