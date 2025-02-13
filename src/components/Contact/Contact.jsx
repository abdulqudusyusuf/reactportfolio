import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a
            href="mailto:abdulqudusyusuf20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            alt="Email"
          >
            <img src="/emailIcon.png" alt="Email" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/abdulqudus-yusuf/"
            target="_blank"
            rel="noopener noreferrer"
            alt="LinkedIn"
          >
            <img src="/linkedinIcon.png" alt="LinkedIn" />
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/abdulqudusyusuf"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub"
          >
            <img src="/githubIcon.png" alt="GitHub" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
