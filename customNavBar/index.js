import React from "react";
// import logo from "../../portlogo/port-logo.png";
import styles from "./styles.module.scss";

const CustomNavBar = () => {
  return (
    <nav class={`navbar navbar-expand-lg navbar-light " ${styles.nabBar}`}>
      <img src={logo} className={styles.logoStyles} />

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class={`collapse navbar-collapse ${styles.rightConatiner}`}
        id="navbarSupportedContent"
      >
        <ul className={`navbar-nav mr-auto `}>
          <li className="nav-item active">
            <a className={`nav-link ${styles.navListing}`} href="#">
              <div className={styles.bottomBorder}>Home</div>
            </a>
          </li>
          <li class="nav-item">
            <a className={`nav-link ${styles.navListing}`} href="#">
              <div className={styles.bottomBorder}>About</div>
            </a>
          </li>
          <li class="nav-item active">
            <a className={`nav-link ${styles.navListing}`} href="#">
              <div className={styles.bottomBorder}>Skills</div>
            </a>
          </li>
          <li class="nav-item active">
            <a className={`nav-link ${styles.navListing}`} href="#">
              <div className={styles.bottomBorder}>Education</div>
            </a>
          </li>
          <li class="nav-item">
            <a className={`nav-link ${styles.navListing}`} href="#">
              <div className={styles.bottomBorder}>Work</div>
            </a>
          </li>
          <li class="nav-item">
            <a className={`nav-link ${styles.navListing}`} href="#">
              <div className={styles.bottomBorder}>Experience</div>
            </a>
          </li>
          <li class="nav-item">
            <a className={`nav-link ${styles.navListing}`} href="#">
              <div className={styles.bottomBorder}> Contact</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default CustomNavBar;
