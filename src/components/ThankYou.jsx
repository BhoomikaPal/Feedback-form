// ThankYou.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Home.css';

function ThankYou() {
  const location = useLocation();
  const { feedback } = location.state || {};

 

  const handleDownload = () => {
    // Generate CSV content
    const csvContent = `Name,Digital Initiatives,Cleanliness,Complaints,Satisfaction\n${feedback.name},${feedback.digitalInitiatives},${feedback.cleanliness},${feedback.complaints},${feedback.satisfaction}\n`;

    // Create a Blob containing the CSV data
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'feedback.csv');
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up resources
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <div className="background">
      <div className="thank-you-content">
        <h1>Thank You for Visiting Us!</h1>
        <p>We appreciate your time and feedback.</p>
        <Link to="/feedback">
            <button className="feedback-button">Leave Feedback</button>
          </Link>
        <button onClick={handleDownload}>Download Feedback</button>
      </div>
    </div>
  );
}

export default ThankYou;
