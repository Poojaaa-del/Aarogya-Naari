import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PeriodTracker from "./pages/PeriodTracker";
import ExerciseVideos from "./pages/ExerciseVideos";
import BookAppointment from "./pages/BookAppointment";
import HealthGuide from "./pages/HealthGuide";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Footer.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/period-tracker" element={<PeriodTracker />} />
        <Route path="/exercise-videos" element={<ExerciseVideos />} />
        <Route path="/health-guide" element={<HealthGuide />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/book-appointment" element={isAuthenticated ? <BookAppointment /> : <Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;