import React, { useState } from 'react';
import "./login.css"
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandle = (value) => {
    setEmail(value);
  };

  const passwordHandle = (value) => {
    setPassword(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      console.log(response.data); 
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => emailHandle(e.target.value)}
          
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => passwordHandle(e.target.value)}
         
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
