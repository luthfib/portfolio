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
        heading={"Building"}
        description={"Building new app using Typescript, React, and Nextjs"}
      />
      <Attribute
        heading={"Leading"}
        description={
          "Leading and implementing UI/UX designs for newly created app"
        }
      />
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
