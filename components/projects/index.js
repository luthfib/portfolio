import React, { useState } from "react";

import styles from "./projects.module.scss";

const Modal = ({ setModalIsOpen }) => {
  const CloseModal = () => {
    document.body.classList.remove("modal-open");
    setModalIsOpen(false);
  };

  return (
    <div onClick={CloseModal} className={styles.overlay} aria-hidden="true">
      <div role="dialog" tabIndex={"-1"} className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Details</h3>
          <p>
            Modernized tech stack to increase web performance vitals and give
            fresh look
          </p>

          <div className={styles.poweredBy}>
            <h5>Powered By</h5>
            <p>React, Next.js, styled-jsx, and Vercel</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

const Project = ({ name, descripton, src, altSrc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    document.body.classList.add("modal-open");
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen ? <Modal setModalIsOpen={setModalIsOpen} /> : null}
      <div className={styles.project} onClick={openModal}>
        <img src={src} alt={altSrc} />
        <h3>{name}</h3>
        <p>{descripton}</p>
      </div>
    </>
  );
};

export const Projects = () => (
  <section className={styles.projectsSection}>
    <h1>Major Projects</h1>
    <div className={styles.projects}>
      <Project
        name="Borneo Football"
        descripton={
          "Modernized tech stack to increase web performance vitals and give fresh look"
        }
        src={"/icons/borneo.svg"}
        altSrc={"borneo football icon"}
      />
      <Project
        name="Language Service Solutions"
        descripton={
          "Modernized tech stack to increase web performance vitals and give fresh look"
        }
        src={"/icons/languageServiceSolutions.svg"}
        altSrc={"language service solutions icon"}
      />
      <Project
        name="Registation System"
        descripton={
          "Registration system for an event hosting 1000+ participants from 20+ nations."
        }
        src={"/icons/subud2.svg"}
        altSrc={"subud icon"}
      />
    </div>
  </section>
);
