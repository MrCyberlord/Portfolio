import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const Projects = () => {
  const projectList = [
    {
      name: "Project 1",
      description: "Description of Project 1",
      technologies: "React, CSS, Firebase",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      name: "Project 2",
      description: "Description of Project 2",
      technologies: "Vue.js, Sass, Node.js",
      demoLink: "https://example.com/demo2",
      githubLink: "https://github.com/yourusername/project2",
    },
  ];

  return (
    <section id="projects">
      <h1>The Projects</h1>
      {projectList.map((project, index) => (
        <ProjectTemplate key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
