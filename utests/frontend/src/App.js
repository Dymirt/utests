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
    <Router>
      <div>
        <header class="header">
			<div class="logo-cont flex_center">
				<img src={logo}/>
			</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Landing />} />  
          <Route path="/login" element={<Login />} />   
          <Route path="/signup" element={<SignUp />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
