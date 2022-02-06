import { Attribute, ExperienceTimelineHeader } from "../common";

import commonStyles from "../common/common.module.scss";
import styles from "./software-engineer.module.scss";

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

  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export const SoftwareEngineer = () => (
  <div className={commonStyles.container}>
    <ExperienceTimelineHeader
      year={"2019"}
      role={"Software Engineer- Optum"}
      gradient={commonStyles.orangeGradient}
    />
    <div className={commonStyles.grid}>
      <Skills />
      <Attribute
        heading={"Automated"}
        description={
          "Automated data pipelines & Cron Jobs with Airflow & Celery in Openshift"
        }
      />
      <Attribute
        heading={"Built"}
        description={
          "Built Jenkins pipelines to automate unit tests, integration tests,and zero downtime deployements"
        }
      />
      <Attribute
        heading={"Deployed"}
        description={
          "Deployed apps in Openshift,including Logstash, ElasticSearch,Kibana and others"
        }
      />
      <Attribute
        heading={"Wrote"}
        description={
          "Wrote serverless functions & aided team in getting up to speed with serverless"
        }
      />
    </div>
  </div>
);
