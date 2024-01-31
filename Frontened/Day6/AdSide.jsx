// AdSide.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './AdSide.css';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

const AdSide = ({ activeSection }) => {
  const sections = [
    {
      title: 'Dashboard',
      icon: <IoIcons.IoIosPaper />,
      path: '/dashboard',
    },
    {
      title: 'Course Details',
      icon: <IoIcons.IoMdPeople />,
      path: '/course-details',
    },
    {
      title: 'Enquiry Details',
      icon: <FaIcons.FaEnvelopeOpenText />,
      path: '/enquiry-details',
    },
    {
      title: 'Logout',
      icon: <FaIcons.FaSignOutAlt />,
      path: '/main',
    },
  ];

  return (
    <div className="ad-side-container">
      <div className="ad-sidebar">
        <h1>BEC</h1>
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className={activeSection === index ? 'active' : ''}
          >
            {section.icon}
            {section.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdSide;
