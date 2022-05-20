import React, { useRef, useState } from "react";

import styles from "./projects.module.scss";
import { useAnimateOnViewport } from "../../lib/hooks";
import { useOnClickOutside } from "../../lib/hooks";

const Modal = ({ description, techUsed, setModalIsOpen, modalIsOpen }) => {
  const ref = useRef(null);

  const CloseModal = () => {
    document.body.classList.remove("modal-open");
    setModalIsOpen(false);
  };
  useOnClickOutside(ref, () => CloseModal());

  return (
    <div className={styles.overlay} aria-hidden={!modalIsOpen}>
      <div ref={ref} role="dialog" tabIndex={"-1"} className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Details</h3>
          <p>{description}</p>

          <div className={styles.poweredBy}>
            <h5>Powered By</h5>
            <p>{techUsed}</p>
          </div>
        </div>
        <div onClick={CloseModal} className={styles.buttonContainer}>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

const Project = ({ name, description, techUsed, src, altSrc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ref = useRef(null);
  useAnimateOnViewport(ref);

  const openModal = () => {
    document.body.classList.add("modal-open");
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen ? (
        <Modal
          techUsed={techUsed}
          setModalIsOpen={setModalIsOpen}
          description={description}
          modalIsOpen={modalIsOpen}
        />
      ) : null}
      <div ref={ref} className={styles.project} onClick={openModal}>
        <img src={src} alt={altSrc} />
        <h3>{name}</h3>
        <p>{description}</p>
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
        description={
          "Help non-profit organization build a site to accept payments and help visibiilty"
        }
        src={"/icons/borneo.svg"}
        altSrc={"borneo football icon"}
        techUsed={"React, Next.js, styled-components, and Vercel"}
      />
      <Project
        name="Language Service Solutions"
        description={
          "Modernized tech stack to increase web performance vitals and give fresh look"
        }
        src={"/icons/languageServiceSolutions.svg"}
        altSrc={"language service solutions icon"}
        techUsed={"React, Next.js, styled-jsx, and Vercel"}
      />
      <Project
        name="Registation System"
        description={
          "Registration system for an event hosting 1000+ participants from 20+ nations."
        }
        src={"/icons/subud2.svg"}
        altSrc={"subud icon"}
        techUsed={
          "React, Next.js, styled-components, Auth0, MongoDB, Python Serverless API, Backblaze, and Vercel"
        }
      />
    </div>
  </section>
);
