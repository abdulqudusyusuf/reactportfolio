import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.minititle}>DATA SCIENTIST</h3>
        <h1 className={styles.title}>Hi, I'm Abdulqudus</h1>
        <p className={styles.description}>
          Helping businesses make smarter decisions with data.
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
