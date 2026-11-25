import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.minititle}>DATA ANALYST</h3>
        <h1 className={styles.title}>Hi, I'm Abdulqudus</h1>
        <p className={styles.description}>
          Turning Data into Insights That Drive Smarter Business Decisions
        </p>
        <a href="#projects" className={styles.contactBtn}>
          View My Work
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
