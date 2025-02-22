import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2>Aarogya Naari</h2>
          <p>Your trusted companion for women's health and wellness. Empowering women with knowledge and care.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/exercise-videos">Exercise Videos</Link></li>
            <li><Link to="/book-appointment">Book Appointment</Link></li>
            <li><Link to="/health-guide">Health Guide</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaEnvelope /> info@aarogyanaari.com</p>
          <p><FaPhoneAlt /> +91-1234567890</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with the latest health tips and wellness guides.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media and Legal Links */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
        <p>© 2025 Aarogya Naari. All Rights Reserved.</p>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
