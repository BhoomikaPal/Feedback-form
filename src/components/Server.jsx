// server.js

const express = require('express');
const app = express();
const PORT = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Mock database to store feedback data
let feedbackData = [];

// Mock user database
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  // Add more users as needed
];

// Endpoint to save feedback
app.post('/api/feedback', (req, res) => {
  const feedback = req.body;
  feedbackData.push(feedback);
  res.status(201).send('Feedback saved successfully');
});

// Endpoint to authenticate users
app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Authentication successful
    res.status(200).json({ message: 'Authentication successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
