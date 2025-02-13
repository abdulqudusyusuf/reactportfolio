import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I'm a data analyst passionate about transforming raw data into
                actionable insights. Skilled in data visualization, statistical
                analysis, and SQL, I help businesses make informed decisions. I
                excel at identifying trends, optimizing processes, and
                presenting data-driven solutions that drive business growth.
              </p>
              <a
                href="/Abdulqudus-Resume.pdf"
                className={styles.resumeBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
