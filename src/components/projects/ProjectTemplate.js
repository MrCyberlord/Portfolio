import React from "react";

const ProjectTemplate = ({
  name,
  description,
  technologies,
  demoLink,
  githubLink,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Technologies used: {technologies}</p>
      <p>
        Live Demo: <a href={demoLink}> </a>
      </p>
      <p>
        GitHub Repo: <a href={githubLink}> </a>
      </p>
    </div>
  );
};

export default ProjectTemplate;
