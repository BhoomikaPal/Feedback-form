
import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

function ThankYou() {
  return (
    <div className="background">
      {/* ThankYou content */}
      <div className="thank-you-content">
        <h1>Thank You for Visiting Us!</h1>
        <p>We appreciate your time and feedback.</p>
        <Link to="/feedback">
          <button className="feedback-button">Leave Feedback</button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
