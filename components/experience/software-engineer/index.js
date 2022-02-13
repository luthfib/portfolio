import { Attribute, ExperienceTimelineHeader } from "../common";
import { createRef, useRef } from "react";

import commonStyles from "../common/common.module.scss";
import styles from "./software-engineer.module.scss";
import { useAnimateOnViewport } from "../../../lib/hooks";

const Skills = () => {
  const skills = [
    "Jest",
    "Flask",
    "Redis",
    "Vue.js",
    "Pytest",
    "Pandas",
    "Jenkins",
    "Postgres",
    "Javascript",
    "Openshift",
  ];
  const ref = useRef(skills.map(() => createRef()));
  skills.map((_, i) => useAnimateOnViewport(ref.current[i]));

  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, i) => (
          <li ref={ref.current[i]} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SoftwareEngineer = () => (
  <div className={commonStyles.container}>
    <ExperienceTimelineHeader
      year={"2019"}
      role={"Software Engineer - Optum"}
      gradient={commonStyles.orangeGradient}
    />
    <div className={commonStyles.grid}>
      <Skills />
      <Attribute
        heading={"Automated"}
        description={
          "Automated unit tests, integration tests, and zero downtime deployments using Jenkins"
        }
      />
      <Attribute
        heading={"Built"}
        description={
          "Built data pipelines & schedulers using Airflow in Openshift"
        }
      />
      <Attribute
        heading={"Deployed"}
        description={
          "Deployed apps in Openshift,including Logstash, ElasticSearch, Kibana and amongst others"
        }
      />
      <Attribute
        heading={"Serverless"}
        description={
          "Wrote serverless functions & aided team in getting up to speed with serverless"
        }
      />
    </div>
  </div>
);
