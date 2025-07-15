import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  // Simulate loading for 2 seconds
  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Cute loading screen
  if (step === 0) {
    return (
      <div className="cute-loading">
        <div className="loader-heart" />
        <div className="loading-text">Loading something cute for Aasma...</div>
      </div>
    );
  }

  // Question step
  if (step === 1) {
    return (
      <div className="question-container">
        <h1>Do you think you are awesome, Aasma?</h1>
        <div className="button-row">
          <button className="yes-btn" onClick={() => setStep(2)}>Yes</button>
          <button className="no-btn" onClick={() => alert('No is not allowed! Try again!')}>No</button>
        </div>
      </div>
    );
  }

  // Gallery step (with photos)
  return (
    <div className="gallery-container">
      <h1>5 Years of Cute Memories!</h1>
      <h2>Me & Aasma</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={process.env.PUBLIC_URL + '/memory1.jpg'} alt="Memory 1" />
        </div>
        <div className="gallery-item">
          <img src={process.env.PUBLIC_URL + '/memory2.jpg'} alt="Memory 2" />
        </div>
        <div className="gallery-item">
          <img src={process.env.PUBLIC_URL + '/memory3.jpg'} alt="Memory 3" />
        </div>
      </div>
      <div className="gallery-caption">Happy 5th Friendship Anniversary! 💖</div>
    </div>
  );
}

export default App;
