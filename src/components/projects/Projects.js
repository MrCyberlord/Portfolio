import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import styles from "./Projects.module.css";

const Projects = () => {
  const projectList = [
    {
      name: "E-Commerce Website",
      image: "/ProjectImages/EcommerceWebsite.png",
      demoLink: "https://ecommercewebsite11.netlify.app/",
      githubLink: "https://github.com/MrCyberlord/EcommerceWebsite2",
      technologies:
        "JavaScript, React, Redux Toolkit, Redux Thunk, Firebase, HTML, CSS",
      features:
        "Used Firebase for Authentication and database functionality. The site can be surfed without authentication, but the user must be authenticated to place an order.",
    },
    {
      name: "Food Delivery Website",
      image: "/ProjectImages/FoodOrderingApp.jpg",
      demoLink: "https://restaurantapp11.netlify.app",
      githubLink: "https://github.com/MrCyberlord/FoodOrderingApp",
      technologies: "JavaScript, React, Context API, HTML, CSS",
      features:
        "This App displays the application of Context API. Data is passed through the component tree without passing props down manually at every level",
    },
    {
      name: "Expense Tracker App",
      image: "/ProjectImages/ExpenseTracker.jpg",
      demoLink: "https://stirring-axolotl-b60d7c.netlify.app/",
      githubLink: "https://github.com/MrCyberlord/ExpenseTracker",
      technologies:
        "JavaScript, React, Redux Toolkit, Redux Thunk, Firebase, HTML, CSS",
      features:
        "Used Firebase for Authentication and database functionality. There's night mode and Expenses - csv file download option for premium users.",
    },
    // {
    //   name: "Mailbox Client",
    //   image: "/ProjectImages/MailboxClient.jpg",
    //   demoLink: "https://example.com/demo2",
    //   githubLink: "https://github.com/yourusername/project2",
    // },
  ];

  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.title}>The Projects</div>
      <div className={styles.note}>
        <strong>Note:</strong> All my projects are mobile responsive.
      </div>
      <div className={styles.projectDisplay}>
        {projectList.map((project, index) => (
          <ProjectTemplate key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
