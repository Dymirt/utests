// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import SignUp from './SignUp';
import logo from './logo1.svg';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div>
        <header class="header">
			<div class="logo-cont flex_center">

				<Link to="/"><img src={logo}/></Link>
			</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
		  <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
