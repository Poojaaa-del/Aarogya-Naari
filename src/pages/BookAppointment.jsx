import React, { useState } from 'react';
import '../styles/BookAppointment.css';

const doctors = [
  { name: "Dr. Aisha Sharma", specialization: 'Gynecologist', availability: 'Mon, Wed, Fri', fee: 500 },
  { name: "Dr. Priya Mehta", specialization: 'Obstetrician', availability: 'Tue, Thu, Sat', fee: 700 },
  { name: "Dr. Neha Kapoor", specialization: 'Gynecologist', availability: 'Mon to Fri', fee: 1000 }
];

const durations = ["30 minutes", "1 hour", "1.5 hours"];

const BookAppointment = () => {
  const [role, setRole] = useState("user");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [userAppointments, setUserAppointments] = useState([]);
  const [amount, setAmount] = useState(0);

  const toggleRole = () => {
    setRole(role === "user" ? "gynac" : "user");
  };

  const handleDoctorChange = (e) => {
    const selected = doctors.find(doc => doc.name === e.target.value);
    setSelectedDoctor(selected.name);
    setAmount(selected.fee);
  };

  const bookAppointment = () => {
    if (selectedDoctor && appointmentType && date && time && duration) {
      const newAppointment = {
        doctor: selectedDoctor,
        type: appointmentType,
        date: date,
        time: time,
        duration: duration,
        amountPaid: amount,
        mode: "Online"
      };
      setUserAppointments([...userAppointments, newAppointment]);
      alert("Appointment booked successfully!");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="appointment-container">
      <h1>Book Appointment</h1>
      <button className="toggle-role" onClick={toggleRole}>
        Switch to {role === "user" ? "Gynecologist" : "User"}
      </button>

      {role === "user" ? (
        <div className="appointment-form">
          <select onChange={handleDoctorChange} value={selectedDoctor}>
            <option value="">Select Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>

          <input 
            type="text" 
            placeholder="Describe your issue" 
            value={appointmentType}
            onChange={(e) => setAppointmentType(e.target.value)}
          />

          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input 
            type="time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <select onChange={(e) => setDuration(e.target.value)} value={duration}>
            <option value="">Select Duration</option>
            {durations.map((duration, index) => (
              <option key={index} value={duration}>
                {duration}
              </option>
            ))}
          </select>

          <button className="book-button" onClick={bookAppointment}>
            Book Appointment
          </button>

          {selectedDoctor && (
            <div className="amount-section">
              Pay Appointment Fee: ₹{amount}
            </div>
          )}
        </div>
      ) : (
        <div className="appointments-view">
          <h2>Appointments Booked</h2>
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="user-appointments-view">
        <h2>Your Appointments</h2>
        <ul>
          {userAppointments.map((appointment, index) => (
            <li key={index}>
              <strong>Doctor:</strong> {appointment.doctor} <br />
              <strong>Issue:</strong> {appointment.type} <br />
              <strong>Date:</strong> {appointment.date} <br />
              <strong>Time:</strong> {appointment.time} <br />
              <strong>Duration:</strong> {appointment.duration} <br />
              <strong>Mode:</strong> {appointment.mode} <br />
              <span><strong>Amount Paid:</strong> ₹{appointment.amountPaid}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookAppointment;
