import styles from "./terminal.module.scss";

const AppleMenuBar = () => (
  <div className={styles.menubar}>
    <div className={styles.menubarClose} />
    <div className={styles.menubarMinimize} />
    <div className={styles.menubarFullscreen} />
  </div>
);

export const Terminal = () => (
  <div className={styles.terminal}>
    <div>
      <AppleMenuBar />
    </div>
    <div>
      <p className={styles.animTypewriter}>~ ls programming languages</p>
      <ul className={styles.animTypewriterEnter}>
        <li>python</li>
        <li>golang</li>
        <li>javascript</li>
        <li>node</li>
      </ul>
    </div>
  </div>
);
