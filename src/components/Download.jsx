import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DownloadFeedback() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDownload = async () => {
    try {
      console.log('Username:', username);
      console.log('Password:', password);

      if (!username || !password) {
        setError('Please enter both username and password.');
        return;
      }

      // Call an authentication endpoint to validate the credentials
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Allow download
        navigate('/download');
      } else {
        // Display error message for invalid credentials
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error occurred during authentication:', error);
      setError('An error occurred while processing your request');
    }
  };

  return (
    <div>
      <h2>Download Feedback</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default DownloadFeedback;
