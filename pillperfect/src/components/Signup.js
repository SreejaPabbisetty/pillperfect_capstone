import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import './signup.css'; // Import the CSS file

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (username && password && password === confirmPassword) {
      alert('User created successfully');
      navigate('/Login'); // Change to '/Login' to match your routes
    } else {
      setError('Please fill out all fields correctly');
    }
  };

  return (
    <div className="container"> {/* Use className instead of inline styles */}
      <h1>SignUp</h1>
      <form onSubmit={handleSignup} className="form"> {/* Use className */}
        <div className="inputGroup"> {/* Use className */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder='enter your username'
            onChange={(e) => setUsername(e.target.value)}
            className="input" // Use className
            required
          />
        </div>
        <div className="inputGroup"> {/* Use className */}
          <label htmlFor="email">Email id:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='enter your email id'
            onChange={(e) => setEmailid(e.target.value)}
            className="input" // Use className
            required
          />
        </div>
        <div className="inputGroup"> {/* Use className */}
          <label htmlFor="password">Create Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='enter your password'
            onChange={(e) => setPassword(e.target.value)}
            className="input" // Use className
            required
          />
        </div>
        <div className="inputGroup"> {/* Use className */}
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder='please re enter your password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input" // Use className
            required
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Use className */}
        <button type="submit" className="button">Sign Up</button> 
        <p className="link">
          Already have an account?<Link to="/login" style={{ color: 'white' }} >Login</Link> 
        </p>
      </form>
    </div>
  );
}

export default Signup;