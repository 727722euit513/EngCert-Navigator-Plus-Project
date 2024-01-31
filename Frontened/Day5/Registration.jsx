// Registration.jsx

import React, { useState } from 'react';
import './Registration.css';

const Registration = ({ onSubmit }) => {
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
    <div>
      <h2>Course Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />

        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />

        <label>
          Select Course:
          <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="">Select a course</option>
            <option value="react101">Introduction to React</option>
            <option value="nodejs101">Node.js Fundamentals</option>
            <option value="Java">Java</option>
            <option value="c++">c++</option>

            {/* Add more courses as needed */}
          </select>
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
