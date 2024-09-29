// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './Landing';  
import Login from './Login';
import SignUp from './SignUp';
import logo from './logo1.svg';

function App() {
  return (
    <main class="min-h-screen flex flex-col">
      <Router>
        <div class="flex-grow">
          <header class="header">
            <div class="logo-cont flex_center">
              <Link to="/"><img src={logo} alt="RedoIt Logo"/></Link>
            </div>
            <nav>
              <Link to="/login" class="md:text-[16px]">Login</Link>
              <Link to="/signup" class="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 md:text-[16px]">Sign Up</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Landing />} />  
            <Route path="/login" element={<Login />} />   
            <Route path="/signup" element={<SignUp />} />  
          </Routes>
        </div>

        {/* Footer Section */}
        <footer class="bg-white py-4 shadow-t-md">
          <div class="container mx-auto flex justify-between items-center px-4">
            {/* Logo Section */}
            <div>
              <Link to="/">
                <img src={logo} alt="RedoIt Logo" class="h-24" />
              </Link>
            </div>
            {/* Copyright Section */}
            <div class="text-gray-600 text-sm">
              ©2024 LazyLemur
            </div>
            {/* Contact/Email Section */}
            <div class="text-gray-600 text-sm">
              blabla@blabla.bla
            </div>
          </div>
        </footer>
      </Router>
    </main>
  );
}

export default App;
