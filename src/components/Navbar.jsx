import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/period-tracker">Period Tracker</Link></li>
        <li><Link to="/exercise-videos">Exercise Videos</Link></li>
        <li><Link to="/book-appointment">Book Appointment</Link></li>
        <li><Link to="/health-guide">Health Guide</Link></li>
        <li className="auth-links">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
