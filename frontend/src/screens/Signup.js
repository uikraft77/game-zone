import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('player');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate real signup API
    console.log('signing up', { userType, username, mobile, password, experience });
    navigate('/user/dashboard');
  };

  return (
    <div className="signup-container">
      <div className="signup-gradient" />
      <div className="signup-glow" />

      <div className="signup-shell">
        <header className="signup-header">
          <div className="logo-placeholder" />
          <button className="lang-btn">
            <span className="material-symbols-outlined">language</span>
            <span>English</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </header>

        <div className="signup-welcome">
          <h1>Welcome to <br /> <span className="primary-text">MysticNumbers</span></h1>
          <p>Predict the future. Win the numbers.</p>
        </div>

        <div className="user-type-section">
          <p className="section-label">Select your path</p>
          <div className="user-type-grid">
            <label className="user-type-card">
              <input
                type="radio"
                name="user_type"
                value="player"
                checked={userType === 'player'}
                onChange={() => setUserType('player')}
              />
              <div className="card-content">
                <span className="material-symbols-outlined icon">stadia_controller</span>
                <span className="card-title">Normal Player</span>
                <span className="card-desc">Play & Win Daily Rewards</span>
              </div>
            </label>

            <label className="user-type-card">
              <input
                type="radio"
                name="user_type"
                value="astrologer"
                checked={userType === 'astrologer'}
                onChange={() => setUserType('astrologer')}
              />
              <div className="card-content">
                <span className="material-symbols-outlined icon">auto_awesome</span>
                <span className="card-title">Astrologer</span>
                <span className="card-desc">Guide Players & Earn</span>
              </div>
            </label>
          </div>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">person</span>
              <input
                type="text"
                placeholder="MysticUser123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">smartphone</span>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <span className="material-symbols-outlined input-icon">lock</span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="visibility-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? 'visibility' : 'visibility_off'}
                </span>
              </button>
            </div>
          </div>

          {userType === 'astrologer' && (
            <div className="form-group">
              <label>Years of Experience</label>
              <div className="input-wrapper">
                <span className="material-symbols-outlined input-icon">history_edu</span>
                <input
                  type="number"
                  placeholder="e.g. 5"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn">
            <span>Start Guessing</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>

        <div className="divider">
          <div />
          <span>Or continue with</span>
          <div />
        </div>

        <div className="social-buttons">
          <button className="social-btn">
            <svg className="social-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
              <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path>
              <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.5166C-0.18551 10.0056 -0.18551 14.0004 1.5166 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
              <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50253 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path>
            </svg>
            <span>Google</span>
          </button>

          <button className="social-btn">
            <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.68-.3-1.42-.42-2.12-.41-.7.01-1.45.13-2.12.44-1.03.48-2.1.55-3.07-.4-4.2-4.1-3.61-10.37.58-12.64 1.25-.67 2.44-.7 3.63-.22.51.21.99.5 1.45.5.47 0 .96-.29 1.48-.51 1.44-.59 2.81-.46 4.12.35 1.03.63 1.83 1.51 2.37 2.54-.15.09-.28.18-.42.25-1.92 1.01-2.6 3.01-1.78 5.14.28.74.7 1.38 1.26 1.91.24.23.5.43.79.67-.18.57-.34 1.1-.56 1.61-.3.72-.66 1.41-1.07 2.08-.18.29-.38.56-.58.83l.1.14zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
            </svg>
            <span>Apple</span>
          </button>
        </div>

        <div className="signup-footer">
          <p>Already have an account? <a onClick={() => navigate('/login')}>Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
