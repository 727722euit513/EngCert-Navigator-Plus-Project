// AdminPanel.jsx

import React, { useState } from 'react';
import './AdminPanel.css';
import AdminSidebar from './AdminSidebar';
import Dashboard from './Dashboard';
import AdminCourse from './AdminCourse';
import AdminEnq from './AdminEnq';
import Home from '../pages/Home';
const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState(0);

  const renderContent = () => {
    switch (activeSection) {
      case 0:
        return <Dashboard />;
      case 1:
        return <AdminCourse />;
      case 2:
        return <AdminEnq />;
        case 3:
            return <Home/>;
      // Add more cases for additional sections as needed
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel-container">
      <AdminSidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;