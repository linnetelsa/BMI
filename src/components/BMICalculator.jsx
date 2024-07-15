import React, { useState } from 'react';
import './BMICalculator.css'; // Import your CSS file for styling

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [showTips, setShowTips] = useState(false);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      let bmiMessage = '';
      if (bmiValue < 18.5) {
        bmiMessage = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiMessage = 'Normal weight';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
      setShowTips(true); // Show health tips once BMI is calculated
    }
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div className="input-group">
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button type="submit" className="calculate-btn">Calculate</button>
      </form>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p className={`bmi-message ${message.toLowerCase()}`}>{message}</p>
        </div>
      )}
      {showTips && (
        <div className="health-tips">
          <h3>Health Tips</h3>
          <ul>
            <li>Eat a balanced diet.</li>
            <li>Stay hydrated.</li>
            <li>Engage in regular physical activity.</li>
            <li>Get enough sleep.</li>
            <li>Avoid stress.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
