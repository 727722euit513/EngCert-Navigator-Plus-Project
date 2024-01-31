// LoginAdmin.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginAdmin.css';

const LoginAdmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., API call, validation, etc.)
    // For simplicity, let's just log the form data for now
    console.log('Submitted:', formData);
  };

  return (
    <div className="loginAdmin-container">
      <form className="loginAdmin-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <div className="form-group">
          <label htmlFor="adminUsername">Username:</label>
          <input
            type="text"
            id="adminUsername"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="adminPassword">Password:</label>
          <input
            type="password"
            id="adminPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/LA">
          <button type="submit">Login</button>
        </Link>
        <p>
          Don't have an account? <Link to="/AdminSignUp">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginAdmin;
