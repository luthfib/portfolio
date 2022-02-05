import { Attribute, ExperienceTimelineHeader } from "../common";

import commonStyles from "../common/common.module.scss";
import styles from "./lead-engineer.module.scss";

const Skills = () => (
  <div className={styles.skills}>
    <h3>Skills</h3>
    <p>
      React, Next.js, Typescript, Style-Components, React Testing Libary,
      Python, Docker, Kubernetes, CSS{" "}
    </p>
  </div>
);

export const LeadEngineer = () => (
  <div className={commonStyles.container}>
    <ExperienceTimelineHeader
      year={"2021"}
      role={"Lead Software Engineer - Optum"}
    />
    <div className={commonStyles.grid}>
      <Attribute
        heading={"Building"}
        description={"Building new app using Typescript, React, and Nextjs"}
      />
      <Attribute
        heading={"Leading"}
        description={
          "Leading and implementing UI/UX designs for newly created app"
        }
      />
      <Skills />
      <Attribute
        heading={"Mentoring"}
        description={
          "Mentoring new team members & interns on frontend and ongoing issues"
        }
      />
      <Attribute
        heading={"Planning"}
        description={"Plannng new sprints & assigning tasks to team members"}
      />
    </div>
  </div>
);
