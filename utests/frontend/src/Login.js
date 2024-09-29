import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  // State variables for email, username, and password
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Initialize useNavigate for navigation
  const navigate = useNavigate(); 

 
  const handleSubmit = (event) => {
    event.preventDefault();  

 
    const url = 'http://127.0.0.1:8000/teacher/api/register/';

 
    const params = {
      email: email,
      username: username,
      password: password,
    };

 
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(params), // Convert params object to a JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log('Response from API:', data);
        // Check if the registration was successful
        if (data.success) { // Assuming your API returns a 'success' field
          navigate('/signup'); // Redirect to signup page
        } else {
 
          console.error('Registration failed:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error during API call:', error);  
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button> 
    </form>
  );
};

export default Login;  
