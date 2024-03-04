import React, { useState } from 'react';
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSatisfactionChange = (satisfaction) => {
    setFeedback({ ...feedback, satisfaction });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save feedback data
      await saveFeedback(feedback);

      // Clear form fields
      setFeedback({
        name: '',
        digitalInitiatives: '',
        cleanliness: '',
        complaints: '',
        satisfaction: '',
      });

      // Navigate to thank you page
      navigate('/');
    } catch (error) {
      console.error('Error saving feedback:', error);
      // Handle error
    }
  };

  const saveFeedback = async (data) => {
    // Mock API call to save feedback data
    await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
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
