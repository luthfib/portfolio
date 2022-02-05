import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imgs}>
        <a href="https://github.com/luthfib" target="_blank">
          <img src="/icons/github.svg" alt="github icon" />
        </a>
        <a href="https://twitter.com/luthfibf" target="_blank">
          <img src="/icons/twitter.svg" alt="twitter icon" />
        </a>
      </div>
      <p>luthfib@hey.com</p>
    </footer>
  );
}
