// Landing.js
import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';
import backImg from './img/image.png';

const Landing = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <div class="home_section flex_center">
  <div class="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-4 mt-1 px-4">
    <div class="text-[#1F1C14] md:w-1/2">
      <h2 class="font-bold text-[32px] md:text-[48px]">Unlock Every Attempt,</h2>
      <h2 class="font-extrabold text-[32px] md:text-[48px]">Shape Your Success</h2>

      <div class="w-5/6">
        <p class="mt-2 text-[14px] md:text-[16px] font-light">
          Empowering every student with unlimited chances to master learning and unlock a world of knowledge.
          <br />
          Start your journey today with RedoIt, and achieve success through persistence in our learning community.
        </p>
      </div>
      <button class="mt-4 bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-700" onClick={handleSignUpClick}>
        Sign Up Now
      </button>
    </div>
    <div class="md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
      <img class="rounded-lg w-3/4 md:w-7/12" src={backImg} alt="Background Image" />
    </div>
  </div>
</div>

  
  );
};

export default Landing;
