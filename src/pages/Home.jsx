import React from "react";
import { Link } from "react-router-dom";
import periodImg from "../assets/period-tracker.png";
import exerciseImg from "../assets/exercise.png";
import doctorImg from "../assets/doctor.jpg";
import healthImg from "../assets/health-guide.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container" >
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Aarogya Naari</h1>
        <p>Your personalized companion for women’s health & wellness</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <img src={periodImg} alt="Period Tracker" className="feature-img"/>
          <div className="feature-text">
            <h2>Period Tracker</h2>
            <p>Track your menstrual cycle and get health insights.</p>
            <Link to="/period-tracker" className="learn-more">Learn More →</Link>
          </div>
        </div>

        <div className="feature-card">
          <img src={exerciseImg} alt="Exercise Videos" className="feature-img"/>
          <div className="feature-text">
            <h2>Exercise Videos</h2>
            <p>Discover workouts designed for women's health.</p>
            <Link to="/exercise-videos" className="learn-more">Explore →</Link>
          </div>
        </div>

        <div className="feature-card">
          <img src={doctorImg} alt="Book Appointment" className="feature-img"/>
          <div className="feature-text">
            <h2>Book Appointments</h2>
            <p>Consult a gynecologist with just a few clicks.</p>
            <Link to="/book-appointment" className="learn-more">Book Now →</Link>
          </div>
        </div>

        <div className="feature-card">
          <img src={healthImg} alt="Health Guide" className="feature-img"/>
          <div className="feature-text">
            <h2>Health Guide</h2>
            <p>Learn about skincare, hair care, sex education, and more.</p>
            <Link to="/health-guide" className="learn-more">Read More →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
