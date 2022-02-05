import { Attribute, ExperienceTimelineHeader } from "../common";

import styles from "../common/common.module.scss";

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
    <div>
      <h3>Skills</h3>
      <hr />
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export const SoftwareEngineer = () => (
  <div className={styles.container}>
    <ExperienceTimelineHeader
      year={"2019"}
      role={"Software Engineer- Optum"}
      gradient={styles.orangeGradient}
    />
    <div className={styles.grid}>
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
