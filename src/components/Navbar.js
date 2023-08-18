import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faHouse,
  faLaptopCode,
  faScrewdriver,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.navList}>
      <ul>
        <li>
          <Link to="header" smooth={true} offset={-70} duration={1200}>
            <FontAwesomeIcon icon={faHouse} /> Home
          </Link>
        </li>
        <li>
          <Link to="about-me" smooth={true} offset={-70} duration={1000}>
            <FontAwesomeIcon icon={faAddressCard} /> About Me
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={-50} duration={1000}>
            <FontAwesomeIcon icon={faScrewdriver} /> Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-70} duration={1000}>
            <FontAwesomeIcon icon={faLaptopCode} /> Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50} duration={1000}>
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
