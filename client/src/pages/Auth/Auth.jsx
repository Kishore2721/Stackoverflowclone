import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; // Added Link import
import "./Auth.css";
import icon from '../../assets/icon.webp';
import Aboutauth from './Aboutauth';
import { signup, login } from '../../action/auth';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }
    if (isSignup && !name) {
      alert("Enter a name to continue");
      return;
    }
    if (isSignup) {
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="auth-section">
      {isSignup && <Aboutauth />}
      <div className="auth-container-2">
        <img src={icon} alt="icon" className='login-logo' width={30} />
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                autoComplete="name"
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              autoComplete="email"
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  <Link to='/forgetpass' className='forget'>Forgot Password?</Link>  
                </p>
              )}
            </div>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              autoComplete={isSignup ? "new-password" : "current-password"}
            />
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>I'm not a robot</p>
            </label>
          )}
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log in'}</button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign up", you agree to our 
              <span style={{ color: "#007ac6" }}> terms of service</span>,
              <span style={{ color: "#007ac6" }}> privacy policy</span> and 
              <span style={{ color: "#007ac6" }}> cookie policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button type='button' className='handle-btn' onClick={handleSwitch}>
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
