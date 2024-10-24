import React from "react";
import logo from '../assets/seco.png'; // Path to your logo image
import "./footer.css"; // Optional: For custom styling
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section: Logo, Social Icons, and Copyright */}
          <div className="footer-left">
            {/* Logo */}
            <div className="footer-logo">
              <img src={logo} alt="seco logo" className="footer-logo-img" />
            </div>
  
            {/* Social Icons below logo */}
            <div className="footer-social">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
  
            {/* Copyright Text */}
            <div className="footer-copyright">
              <p>&copy; 2024 by seco.</p>
            </div>
          </div>
  
          {/* Right Section: Links and Email Form */}
          <div className="footer-right">
            {/* Links */}
            <div className="footer-links">
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Email Form */}
            <div className="footer-waitlist">
              <p>Join the waitlist</p>
              <form>
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
