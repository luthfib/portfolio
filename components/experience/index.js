import React, { useRef } from "react";

import { DataEngineer } from "./data-engineer";
import { LeadEngineer } from "./lead-engineer";
import { ResearchEngineer } from "./research-engineer";
import { SoftwareEngineer } from "./software-engineer";
import styles from "./index.module.scss";
import { useAnimateOnViewport } from "../../lib/hooks";

export const Experience = () => {
  const ref = useRef(null);
  useAnimateOnViewport(ref);

  return (
    <section className={styles.experience}>
      <h1 ref={ref}>Experience</h1>
      <LeadEngineer />
      <ResearchEngineer />
      <SoftwareEngineer />
      <DataEngineer />
    </section>
  );
};
