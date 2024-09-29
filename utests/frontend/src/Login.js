import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear the error message on input change
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation
    if (formData.email === '' || formData.password === '') {
      setErrorMessage('Both fields are required.');
      return;
    }

    console.log('Login Data:', formData);
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Sign in</h1>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input 
              type="email" 
              name="email"
              id="email"
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input 
              type="password" 
              name="password"
              id="password"
              placeholder="Enter your password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Checkbox Section */}
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="remember-me" 
              className="mr-2"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-700">Keep me logged in</label>
          </div>
          
          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {errorMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
            Continue
          </button>
          
          <div className="mt-4 text-center text-sm">
            <p className="text-gray-600">Don't have an account? 
              <a href="/signup" className="text-blue-500 hover:underline"> Register now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
