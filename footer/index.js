import React from "react";

const Footer = () => {
  return (
    <div className={`container ${styles.footerContainer}`}>
      <div className="row">
        <div className={`col-sm ${styles.footerColumn}`}>
          <div className={styles.footerColumnHeading}>Sagar's Portfolio</div>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p>Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
        <div className={`col-sm ${styles.footerColumn}`}>
          <div className={styles.footerColumnHeading}>Quick Links</div>
          <h6>Home</h6>
          <h6> About </h6>
          <h6>Skills </h6>
          <h6>Education</h6>
          <h6> Work </h6>
          <h6>Experience</h6>
        </div>
        <div className={`col-sm ${styles.footerColumn}`}>
          <div className={styles.footerColumnHeading}>Contact Info</div>
          <div>+91 9915944300</div>
          <div>sagar@gmail.com </div>
          <div>Pune, India-412206</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
