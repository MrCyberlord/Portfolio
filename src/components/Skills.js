import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skillsList = [
    { name: "JavaScript", icon: "/images/JavaScriptIcon.png" },
    { name: "React", icon: "/images/ReactIcon.png" },
    { name: "HTML", icon: "/images/HTMLIcon.png" },
    { name: "CSS", icon: "/images/CSSIcon.png" },
    { name: "Git", icon: "/images/GitIcon.png" },
    { name: "Firebase", icon: "/images/FirebaseIcon.png" },
    { name: "Redux", icon: "/images/ReduxIcon.png" },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        {skillsList.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <img
              src={skill.icon}
              alt={skill.name}
              className={styles.skillIcon}
            />
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
