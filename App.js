// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThankYou />} /> {/* Make ThankYou the main page */}
        <Route path="/feedback" element={<FeedbackForm />} /> {/* Route to FeedbackForm */}
      </Routes>
    </Router>
  );
}

export default App;
