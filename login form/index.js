import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [Fname, setFirstName] = useState("");
  const [Lname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (event) => {
    event.preventDefault();
    // Perform validation or authentication logic here
    navigate('/buyer');
  };

  return (
    <div className="Login">
      <h1>RENTIFY</h1>
      <div className="login-page">
        <h2>LOGIN</h2>
        <form onSubmit={onhandleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={Fname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={Lname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;