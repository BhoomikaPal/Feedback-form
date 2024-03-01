// ThankYou.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  return (
    <div className="thank-you-container">
      <div className="car-container">
        <div className="car"></div>
      </div>
      <div className="thank-you-content">
        <h1>Thank You for Visiting Us!</h1>
        <p>We appreciate your time and feedback.</p>
        <Link to="/feedback">Leave Feedback</Link>
      </div>
    </div>
  );
}

export default ThankYou;
