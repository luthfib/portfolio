import styles from "./lead-software-optum.module.scss";

const Attribute = ({ heading, description }) => (
  <div className={styles.attribute}>
    <h3>{heading}</h3>
    <p>{description}</p>
  </div>
);

const Skills = () => (
  <div className={styles.skills}>
    <h3>Skills</h3>
    <p>
      React, Next.js, Typescript, Style-Components, React Testing Libary,
      Python, Docker, Kubernetes, CSS{" "}
    </p>
  </div>
);

export const Experience = () => (
  <section className={styles.experience}>
    <h1>Experience</h1>
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <span className={styles.line}></span>
        <div className={styles.circle}> </div>
        <h2>2021</h2>
        <p>Lead Software Engineer - Optum</p>
      </div>
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
  </section>
);
