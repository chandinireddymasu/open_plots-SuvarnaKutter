import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/SignIn.css'; // Import CSS file for styling

const SignIn = () => {
    let navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState(null);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (user && user.email === email && user.password === password) {
        alert('Login Successfully!');
        setEmail('');
        setPassword('');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    };
  
    const handleRegister = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
      } else {
        setUser({ email, password });
        alert('Registered Successfully!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setActiveTab('login');
      }
    };
  
    const renderForm = () => {
      switch (activeTab) {
        case 'login':
          return (
            <form onSubmit={handleLogin} className="form-box">
              <h2>Login Here</h2>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              <button type="submit">Login</button>
              <p className="link">Forgot Password?</p>
            </form>
          );
        case 'register':
          return (
            <form onSubmit={handleRegister} className="form-box">
              <h2>Register Here</h2>
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
              <button type="submit">Register</button>
            </form>
          );
        case 'forgot':
          return (
            <form onSubmit={(e) => e.preventDefault()} className="form-box">
              <h2>Recover Password</h2>
              <input type="email" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit">Send Recovery Email</button>
            </form>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="container3">
        <div className="card3">
          <div className="left-panel">
            <div className="side-image" id="form-image"></div>
            <div className="tabs">
              <button onClick={() => setActiveTab('login')} className={activeTab === 'login' ? 'active' : ''}>Login</button>
              <button onClick={() => setActiveTab('register')} className={activeTab === 'register' ? 'active' : ''}>Register</button>
              <button onClick={() => setActiveTab('forgot')} className={activeTab === 'forgot' ? 'active' : ''}>Forgot Password?</button>
            </div>
          </div>
          <div className="right-panel">
            {renderForm()}
          </div>
        </div>
      </div>
    );
  };
  
  
  
export default SignIn;
