// Landing.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div class="home_section flex_center">
<div>
      <h1>Welcome to Our Educational Platform</h1>
      <p>Join us to unlock a world of learning opportunities.</p>
      <button onClick={handleSignUpClick}>Sign Up Now</button>
    </div>
    </div>
  );
};

export default Landing;
