import React from 'react';
import './App.css';
import Header from './Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 