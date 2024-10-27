import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/MenuPage');
  };

  return (
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form">
        <div className="inputGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder='enter your username'
            onChange={(e) => setUsername(e.target.value)}
            className="input" 
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='enter your registered email id'
            onChange={(e) => setEmailid(e.target.value)}
            className="input" 
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='enter your password'
            onChange={(e) => setPassword(e.target.value)}
            className="input" 
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">Login</button>
        <p className="link">
          Don't have an account? <Link to="/signup" style={{ color: 'white' }} >Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;