import React, { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/PeriodTracker.css';
import 'react-calendar/dist/Calendar.css';

const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [predictedDates, setPredictedDates] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    calculatePredictedDates();
  }, [lastPeriodDate, cycleLength]);

  const calculatePredictedDates = useCallback(() => {
    if (lastPeriodDate && cycleLength) {
      const startDate = new Date(lastPeriodDate);
      const dates = [];
      for (let i = 0; i < 12; i++) { // Predicting for the next 12 cycles
        const nextDate = new Date(startDate);
        nextDate.setDate(startDate.getDate() + cycleLength * i);
        dates.push(nextDate);
      }
      setPredictedDates(dates);
    }
  }, [lastPeriodDate, cycleLength]);
  
  useEffect(() => {
    calculatePredictedDates();
  }, [calculatePredictedDates]);

  const addReminder = () => {
    const reminderDate = new Date(selectedDate);
    setReminders([...reminders, reminderDate]);
  };

  return (
    <div className="period-tracker-container">
      <h1>Track Your Periods</h1>
      <div className="input-section">
        <label className="input-section-text">Last Period Date:</label>
        <input 
          type="date" 
          value={lastPeriodDate} 
          onChange={(e) => setLastPeriodDate(e.target.value)} 
        />
        <label className="input-section-text">Cycle Length (days):</label>
        <input 
          type="number" 
          value={cycleLength} 
          onChange={(e) => setCycleLength(e.target.value)} 
          min="21" max="35"
        />
      </div>
      <Calendar 
        value={selectedDate} 
        onChange={setSelectedDate} 
        tileClassName={({ date, view }) => {
          if (predictedDates.some(d => d.toDateString() === date.toDateString())) {
            return 'predicted-period';
          }
          if (reminders.some(r => r.toDateString() === date.toDateString())) {
            return 'reminder-date';
          }
        }}
      />
      <button onClick={addReminder} className="add-reminder-button">Add Reminder</button>
      <div className="predicted-dates">
        <h2>Predicted Period Dates:</h2>
        <ul>
          {predictedDates.map((date, index) => (
            <li key={index}>{date.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PeriodTracker;
