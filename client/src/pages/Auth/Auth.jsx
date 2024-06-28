import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'           
import "./Auth.css"
import icon from '../../assets/icon.webp'
import Aboutauth from './Aboutauth'
import { signup, login } from '../../action/auth'

const Auth = () => {
  const [issignup, setissignup] = useState(false)
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password")
    }
    if (issignup) {
      if (!name) {
        alert("Enter a name to continue")
      }
      dispatch(signup({ name, email, password }, navigate))
    } else {
      dispatch(login({ email, password }, navigate))
    }
  }
  
  const handleSwitch = () => {
    setissignup(!issignup);
    setname("");
    setemail("");
    setpassword("")
  }
  
  return (
    <section className="auth-section">
      {issignup && <Aboutauth />}
      <div className="auth-container-2">
        <img src={icon} alt="icon" className='login-logo' width={30} />
        <form onSubmit={handlesubmit}>
          {issignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={(e) => setname(e.target.value)} 
                autocomplete="name"
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
              onChange={(e) => setemail(e.target.value)} 
              autocomplete="email"
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!issignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot Password?
                </p>
              )}
            </div>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              onChange={(e) => setpassword(e.target.value)} 
              autocomplete={issignup ? "new-password" : "current-password"}
            />
          </label>
          {issignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>I'm not a robot</p>
            </label>
          )}
          <button type='submit' className='auth-btn'>{issignup ? 'Sign Up' : 'Log in'}</button>
          {issignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign up", you agree to our 
              <span style={{ color: "#007ac6" }}> terms of service</span>,
              <span style={{ color: "#007ac6" }}> privacy policy</span> and 
              <span style={{ color: "#007ac6" }}> cookie policy</span>.
            </p>
          )}
        </form>
        <p>
          {issignup ? 'Already have an account?' : "Don't have an account?"}
          <button type='button' className='handle-btn' onClick={handleSwitch}>
            {issignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  )
}

export default Auth
