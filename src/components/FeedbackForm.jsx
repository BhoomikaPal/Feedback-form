import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { RiEmotionHappyLine, RiEmotionSadLine } from 'react-icons/ri';
import './FeedbackForm.css';

function FeedbackForm({ history }) {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    feedbackText: '',
    complaints: '',
    satisfaction: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(feedback);
    history.push('/thank-you'); 
  };

  return (
  
      <div>
        <RiEmotionHappyLine />
        <RiEmotionSadLine />
        
    
    <div className="feedback-form">
      <h1>Manufacturing Plant Visit Feedback</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input type="text" name="name" value={feedback.name} onChange={handleInputChange} required />
        </label>
        <label>
          Your Email:
          <input type="email" name="email" value={feedback.email} onChange={handleInputChange} required />
        </label>
        <label>
          Feedback:
          <textarea name="feedbackText" value={feedback.feedbackText} onChange={handleInputChange} rows="4" required />
        </label>
        <label>
          Complaints (if any):
          <textarea name="complaints" value={feedback.complaints} onChange={handleInputChange} rows="4" />
        </label>
        <label>
          Satisfaction:
          <select name="satisfaction" value={feedback.satisfaction} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="very_satisfied">Very Satisfied <RiEmotionHappyLine /></option>
            <option value="satisfied">Satisfied <RiEmotionHappyLine /></option>
            <option value="neutral">Neutral</option>
            <option value="unsatisfied">Unsatisfied <RiEmotionSadLine /></option>
            <option value="very_unsatisfied">Very Unsatisfied <RiEmotionSadLine /></option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default FeedbackForm;
