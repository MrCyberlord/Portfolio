import React from "react";
import styles from "./ProjectTemplate.module.css";

const ProjectTemplate = ({
  name,
  image,
  demoLink,
  githubLink,
  technologies,
  features,
}) => {
  return (
    <div className={styles.projectCard}>
      <img className={styles.projectImage} src={image} alt={name} />
      <div className={styles.projectTitle}>{name}</div>
      <div className={styles.buttonContainer}>
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className={styles.demoButton}>Live Demo</button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className={styles.gitButton}>GitLink</button>
        </a>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.projectTechnologies}>
          <strong>Technologies:</strong> {technologies}
        </div>
        <div className={styles.projectFeatures}>
          <strong>Features:</strong> {features}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
