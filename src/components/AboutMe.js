import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <h1 className={styles.aboutMeHeading}>About Me</h1>
      <div className={styles.aboutMeIntro}>
        I am passionate about coding and creating awesome user interfaces that
        are engaging and aesthetically pleasing. I am enthusiastic about
        transforming ideas into digital products. I have an Engineering degree
        in Electronics and Telecommunications but my passion led me to where I
        am now. I have 1+ years in software development. I believe in writing
        clean and efficient code that conveys the most satisfying, effective and
        visually appealing experiences for users. Apart from technology I am
        into fitness and sci-fi movies/series.
      </div>
    </section>
  );
};

export default AboutMe;
