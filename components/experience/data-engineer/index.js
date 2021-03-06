import { Attribute, ExperienceTimelineHeader } from "../common";
import React, { useEffect, useRef, useState } from "react";

import commonStyles from "../common/common.module.scss";
import styles from "./data-engineer.module.scss";
import { useAnimateOnViewport } from "../../../lib/hooks";
import { useElementSize } from "../../../lib/hooks";

const Tabs = ({ currentTab, setCurrentTab }) => {
  const tabs = ["Summary", "Skills"];
  const ref = useRef(null);
  useAnimateOnViewport(ref);

  return (
    <div ref={ref} className={styles.tabs}>
      {tabs.map((tab) => (
        <p
          key={tab}
          onClick={(e) => setCurrentTab(e.target.innerText)}
          className={currentTab === tab ? styles.active : ""}
        >
          {tab}
        </p>
      ))}
    </div>
  );
};

const Skills = ({ width, height }) => {
  const pythonFrameworks = ["Pandas", "Numpy", "Airflow"];
  const databaseSystems = ["Redshift", "MSSQL"];
  const other = ["D3", "CSS", "Docker", "Javascript", "ELK stack"];
  const ref = useRef(null);
  useAnimateOnViewport(ref);

  return (
    <div
      ref={ref}
      className={styles.skillsGrid}
      style={{ width: `${width}px` }}
    >
      <div className={styles.skillSection}>
        <h3>Python Frameworks</h3>
        <ul>
          {pythonFrameworks.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className={styles.skillSection}>
        <h3>Database Systems</h3>
        <ul>
          {databaseSystems.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className={styles.skillSection}>
        <h3>Other</h3>
        <ul>
          {other.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Patent = ({ heading }) => {
  return (
    <div className={styles.patent}>
      <h3>{heading}</h3>
      <p>
        <a
          target="_blank"
          href="https://patentscope.wipo.int/search/en/detail.jsf?docId=US313893643"
        >
          Patented
        </a>{" "}
        a unique method that deters scammers from purchasing the company product
      </p>
    </div>
  );
};

const Summary = ({ forwardRef }) => (
  <div ref={forwardRef} className={commonStyles.grid}>
    <Patent heading={"Patent"} />
    <Attribute
      heading={"Maintained"}
      description={
        "Maintained and optimized Redshift DB in AWS, as well as EMR cluster for data pulls"
      }
    />
    <Attribute
      heading={"Set up"}
      description={
        "Setup and Hooked up db connection logic to feed in custom visualization and data"
      }
    />
    <Attribute
      heading={"Shell Scripts"}
      description={
        "Built Shell scripts in Linux to automate data pull from customer instances"
      }
    />
    <Attribute
      heading={"Seperated"}
      description={"Separated frontend, backend, & Redis into their own skills"}
    />
    <Attribute
      heading={"Machine Learning"}
      description={
        "Assisted with Machine Learning models & data-driven solutions"
      }
    />
    <Attribute
      heading={"Custom"}
      description={"Built Custom visualizations using D3"}
    />
  </div>
);

export const DataEngineer = () => {
  const [currentTab, setCurrentTab] = useState("Summary");
  const [ref, { width, height }] = useElementSize();
  const [summaryWidth, setSummaryWidth] = useState(0);
  const [summaryHeight, setSummaryHeight] = useState(0);

  useEffect(() => {
    if (width > 0) {
      setSummaryWidth(width);
      setSummaryHeight(height);
    }
  }, [width]);

  return (
    <div className={commonStyles.container}>
      <ExperienceTimelineHeader
        year={"2017"}
        role={"Data Engineer - Connectwise"}
        gradient={styles.pinkishGradient}
      />
      <div className={styles.container}>
        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === "Summary" ? (
          <Summary forwardRef={ref} />
        ) : (
          <Skills width={summaryWidth} height={summaryHeight} />
        )}
      </div>
    </div>
  );
};
