import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="about-me" smooth={true} offset={-70} duration={1000}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-70} duration={1000}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-70} duration={1000}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="work-experience" smooth={true} offset={-70} duration={1000}>
            Work Experience
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-70} duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
