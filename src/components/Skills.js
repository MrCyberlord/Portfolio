import React from "react";

const Skills = () => {
  const skillsList = ["JavaScript", "React", "HTML", "CSS", "Git", "Node.js"];

  return (
    <section id="skills">
      <h1>Skills</h1>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
