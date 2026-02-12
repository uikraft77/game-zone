import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();
  const [role, setRole] = useState('Player');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate real auth
    console.log('logging in', { role, identifier });
    navigate('/user/dashboard');
  };

  return (
    <div className="login-container">
      <div className="ambient-bg">
        <div className="glow-top" />
        <div className="glow-bottom" />
      </div>

      <div className="login-shell">
        <div className="top-bar">
          <div className="logo-space" />
          <div className="lang-pill" role="button" onClick={() => { /* toggle UI language UI can be added */ }}>
            <span className="material-symbols-outlined">translate</span>
            <p>EN / HI / PB</p>
          </div>
        </div>

        <div className="hero">
          <div className="hero-card">
            <div className="hero-image" />
            <div className="hero-overlay" />
            <div className="hero-icon">
              <span className="material-symbols-outlined">casino</span>
            </div>
          </div>
        </div>

        <div className="headline">
          <h1>LOGIN TO<br /><span className="primary">PREDICT</span></h1>
          <p className="subtitle">Welcome back to the cosmic game.</p>
        </div>

        <div className="role-switcher">
          <label className={`role-btn ${role === 'Player' ? 'active' : ''}`}>
            <input type="radio" name="role" value="Player" checked={role === 'Player'} onChange={() => setRole('Player')} />
            <span className="material-symbols-outlined">person</span>
            <span>Player</span>
          </label>
          <label className={`role-btn ${role === 'Astrologer' ? 'active' : ''}`}>
            <input type="radio" name="role" value="Astrologer" checked={role === 'Astrologer'} onChange={() => setRole('Astrologer')} />
            <span className="material-symbols-outlined">auto_awesome</span>
            <span>Astrologer</span>
          </label>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field-label">Mobile Number or Email</label>
            <div className="input-wrap">
              <div className="input-icon"><span className="material-symbols-outlined">mail</span></div>
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Enter your ID"
                type="text"
                className="text-input"
              />
            </div>
          </div>

          <div className="field">
            <div className="field-top">
              <label className="field-label">Password</label>
              <a href="#" className="forgot">Forgot?</a>
            </div>
            <div className="input-wrap">
              <div className="input-icon"><span className="material-symbols-outlined">lock</span></div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                type="password"
                className="text-input"
              />
              <button type="button" className="visibility-btn"><span className="material-symbols-outlined">visibility</span></button>
            </div>
          </div>

          <button className="login-btn" type="submit">
            LOG IN
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>

        <div className="divider">
          <div />
          <span>Or continue with</span>
          <div />
        </div>

        <div className="socials">
          <button className="social-btn"><span className="material-symbols-outlined">circle</span></button>
          <button className="social-btn"><span className="material-symbols-outlined">nutrition</span></button>
          <button className="social-btn facebook"><span className="material-symbols-outlined">public</span></button>
        </div>

        <div className="footer">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
          <button className="guest-btn">Play as Guest <span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
