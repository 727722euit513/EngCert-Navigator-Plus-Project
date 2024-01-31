/* Regis.jsx */

import React, { useState } from 'react';
import './Regis.css';

const Regis = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate form data before submitting
    if (firstName && lastName && email && selectedCourse) {
      // Prepare registration data
      const registrationData = {
        firstName,
        lastName,
        email,
        selectedCourse,
      };

      // Call the onSubmit prop with the registration data
      onSubmit(registrationData);

      // Optional: Clear the form fields after submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setSelectedCourse('');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className='mal'>
      <div className="registration-container">
        <h2 className="registration-heading">Course Registration</h2>
        <form className="registration-form" onSubmit={handleFormSubmit}>
          <label className="registration-label">
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="registration-input"
            />
          </label>
          <br />

          <label className="registration-label">
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="registration-input"
            />
          </label>
          <br />

          <label className="registration-label">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="registration-input"
            />
          </label>
          <br />

          <label className="registration-label">
            Select Course:
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="registration-select"
            >
              <option value="">Select a course</option>
              <option value="react101">Introduction to React</option>
              <option value="nodejs101">Node.js Fundamentals</option>
              <option value="Java">Java</option>
              <option value="c++">c++</option>
            </select>
          </label>
          <br />

          <button type="submit" className="registration-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regis;
