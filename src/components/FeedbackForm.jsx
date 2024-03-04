import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeedbackForm.css';

function FeedbackForm() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    name: '',
    digitalInitiatives: '',
    cleanliness: '',
    complaints: '',
    satisfaction: '',
  });

  useEffect(() => {
    // Check if there's any saved data in local storage
    const savedData = localStorage.getItem('feedbackData');
    if (savedData) {
      // Log the saved data to the console
      console.log('Saved data retrieved from local storage:', savedData);
      // Parse the saved data
      const parsedData = JSON.parse(savedData);
      // Log the parsed data to the console
      console.log('Parsed data:', parsedData);
      // Update the feedback state with the parsed data
      setFeedback(parsedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSatisfactionChange = (satisfaction) => {
    setFeedback({ ...feedback, satisfaction });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    console.log('Form is being submitted...'); // Add this line to check if handleSubmit is triggered

    // Log the feedback data to console to verify its contents
    console.log('Feedback data:', feedback);

    // Handle form submission logic here
    console.log('Form submitted:', feedback);
  
    // Save data to local storage
    localStorage.setItem('feedbackData', JSON.stringify(feedback));

    // Navigate to the ThankYou component
    if (navigate) {
      navigate('/thank-you');
    } else {
      console.error('Navigate object is undefined.');
    }
  };

  return (
    <div className="background">
      <div className="container">
        <div className="feedback-form">
          <h1>TBT-Budhni Plant Visit Feedback</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Your Name:
              <input type="text" name="name" value={feedback.name} onChange={handleInputChange} required />
            </label>
            <label>
              Cleanliness:
              <textarea name="cleanliness" value={feedback.cleanliness} onChange={handleInputChange} rows="4" required />
            </label>
            <label>
              Area for Improvement (if any):
              <textarea name="complaints" value={feedback.complaints} onChange={handleInputChange} rows="4" />
            </label>
            <div className="satisfaction">
              <label>Satisfaction Level:</label>
              <div className="satisfaction-icons">
                <span
                  className={`satisfaction-icon ${feedback.satisfaction === 'very_satisfied' && "selected"}`}
                  onClick={() => handleSatisfactionChange('very_satisfied')}
                  title="Very Satisfied"
                >
                  😊
                </span>
                <span
                  className={`satisfaction-icon ${feedback.satisfaction === 'satisfied' && "selected"}`}
                  onClick={() => handleSatisfactionChange('satisfied')}
                  title="Satisfied"
                >
                  🙂
                </span>
                <span
                  className={`satisfaction-icon ${feedback.satisfaction === 'neutral' && "selected"}`}
                  onClick={() => handleSatisfactionChange('neutral')}
                  title="Neutral"
                >
                  😐
                </span>
                <span
                  className={`satisfaction-icon ${feedback.satisfaction === 'unsatisfied' && "selected"}`}
                  onClick={() => handleSatisfactionChange('unsatisfied')}
                  title="Unsatisfied"
                >
                  😞
                </span>
                <span
                  className={`satisfaction-icon ${feedback.satisfaction === 'very_unsatisfied' && "selected"}`}
                  onClick={() => handleSatisfactionChange('very_unsatisfied')}
                  title="Very Unsatisfied"
                >
                  😢
                </span>
              </div>
              {feedback.satisfaction && (
                <div className="satisfaction-description">
                  {feedback.satisfaction}
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
