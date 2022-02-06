import { DataEngineer } from "./data-engineer";
import { LeadEngineer } from "./lead-engineer";
import { ResearchEngineer } from "./research-engineer";
import { SoftwareEngineer } from "./software-engineer";
import styles from "./index.module.scss";

export const Experience = () => (
  <section className={styles.experience}>
    <h1>Experience</h1>
    <LeadEngineer />
    <ResearchEngineer />
    <SoftwareEngineer />
    <DataEngineer />
  </section>
);
