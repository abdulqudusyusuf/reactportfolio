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
                I'm a data scientist passionate about transforming complex data
                into actionable insights. With expertise in data visualization,
                predictive modeling, and statistical analysis, I help businesses
                make smarter decisions. I thrive on solving problems, uncovering
                trends, and presenting data in ways that drive meaningful
                outcomes.
              </p>
              <a href="#projects" className={styles.resumeBtn}>
                View My Resume
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
