import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, updateTimes }) {
  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h1>Reserve Your Table</h1>
          <p>Join us for an unforgettable dining experience</p>
        </div>
        <div className="booking-card">
          <BookingForm 
            availableTimes={availableTimes}
            updateTimes={updateTimes}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingPage; 