import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/project/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
