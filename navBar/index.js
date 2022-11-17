import React from "react";


/* There Should Be Implemented Bootstrap in your Project */

const NavBar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navBar}`}
    >
      <div>
        <ul class="navbar-brand" href="#">
          logo
        </ul>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${styles.menuItems}`}
        id="navbarSupportedContent"
      >
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Skills</ul>
        <ul>Education</ul>
        <ul>Work</ul>
        <ul>Experience</ul>
        <ul>Contact</ul>
      </div>
    </nav>
  );
};
export default NavBar;
