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
                I'm a Data Analyst with over 2 years of experience working with
                data to uncover insights and support better business decisions.
                I work with SQL, Python, Power BI and Tableau to analyse
                datasets, build interactive dashboards, identify trends and
                communicate findings. My experience spans business intelligence,
                financial and operational analysis, and data-driven
                problem-solving, with a focus on turning complex data into
                clear, actionable insights.
              </p>
              <a
                href="/Abdulqudus_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeBtn}
              >
                View CV
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
