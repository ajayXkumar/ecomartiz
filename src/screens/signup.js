import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameHandle = (value) => {
    setName(value);
  };

  const emailHandle = (value) => {
    setEmail(value);
  };

  const passwordHandle = (value) => {
    setPassword(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/register', {
        name,
        email,
        password,
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => nameHandle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => emailHandle(e.target.value)}
            required
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
            required
          />
        </div>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
