import { Attribute, ExperienceTimelineHeader } from "../common";
import React, { useState } from "react";

import commonStyles from "../common/common.module.scss";
import styles from "./data-engineer.module.scss";

const Tabs = () => {
  const tabs = ["Summary", "Skills"];
  const [currentTab, setCurrentTab] = useState("Summary");

  return (
    <div className={styles.tabs}>
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

export const DataEngineer = () => (
  <div className={commonStyles.container}>
    <ExperienceTimelineHeader
      year={"2017"}
      role={"Data Engineer - Connectwise"}
      gradient={styles.pinkishGradient}
    />
    <div className={styles.container}>
      <Tabs />
      <div className={commonStyles.grid}>
        <Attribute
          heading={"Built"}
          description={"Custom frontend solution from start to finish"}
        />
        <Attribute
          heading={"Maintaned"}
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
          heading={"Separated"}
          description={
            "Built Shell scripts in Linux to automate data pull from customer instances"
          }
        />
        <Attribute
          heading={"Shell Scripts"}
          description={
            "Separated frontend,backend, & Redis into their own skills"
          }
        />
        <Attribute
          heading={"Machine Learning"}
          description={
            "Assisted with Machine Learning models & data-driven solutions"
          }
        />
      </div>
    </div>
  </div>
);
