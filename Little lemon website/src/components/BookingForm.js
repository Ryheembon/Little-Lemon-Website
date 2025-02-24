/* global fetchAPI, submitAPI */  // Declare fetchAPI and submitAPI as global variables for ESLint

import React, { useState } from 'react';
import './BookingForm.css';

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(new Date(action.date));
        default:
            return state;
    }
};

const BookingForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    occasion: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id.replace('res-', '')]: value
    });

    if (id === 'res-date') {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      occasion: formData.occasion
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-date">Date</label>
        <input 
          type="date" 
          id="res-date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="res-time">Time</label>
        <select 
          id="res-time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a time</option>
          {updateTimes(null, { type: 'UPDATE_TIMES', date: formData.date }).map(time => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="guest-occasion-wrapper">
        <div className="form-group">
          <label htmlFor="res-guests">Number of guests</label>
          <input 
            type="number" 
            id="res-guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="res-occasion">Occasion</label>
          <select 
            id="res-occasion"
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button type="submit" aria-label="Submit reservation" className="submit-button">
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm; 