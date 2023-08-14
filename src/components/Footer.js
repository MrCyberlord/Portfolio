import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerItems}>
      <div className={styles.iconContainer}>
        <a
          href="https://twitter.com/MrCyberlord"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.icon1} />
        </a>
        <a
          href="https://www.linkedin.com/in/theamanjain/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon2} />
        </a>
        <a
          href="https://www.instagram.com/mrcyberlord/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon3} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
