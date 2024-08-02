import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Socials to be added. Possibly have this about us section, but will
            be revisited. Just a quick placeholder atm
          </p>
        </div>
        <div className="footer-section">
          <h3>Team Members</h3>
          <ul>
            <li>Brian Janes</li>
            <li>Brad Ayers</li>
            <li>Kyle Hollett</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: school email 1, 2, 3</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 React Finals Team. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
