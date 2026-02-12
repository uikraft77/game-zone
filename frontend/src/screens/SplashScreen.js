import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  const handleStartPlaying = () => {
    setLanguage(selectedLanguage);
    // Navigate to login or main dashboard
    navigate('/login');
  };

  return (
    <div className="splash-container">
      {/* Decorative Background Elements */}
      <div className="splash-background">
        <div className="glow-blur glow-top-left"></div>
        <div className="glow-blur glow-bottom-right"></div>
      </div>

      {/* Main Content */}
      <div className="splash-content">
        {/* Top Section: Logo & Branding */}
        <div className="splash-header animate-fade-up">
          <div className="logo-wrapper">
            <div className="logo-glow"></div>
            <div className="logo-container">
              <div className="logo-image"></div>
              <span className="material-symbols-outlined logo-icon">auto_awesome</span>
            </div>
          </div>
          <h1 className="app-title">AstroGuess</h1>
          <p className="app-subtitle">Mystical Number Gaming</p>
        </div>

        {/* Middle Section: Language Selection */}
        <div className="language-section animate-fade-up delay-100">
          <div className="language-header">
            <p className="language-title">Choose your language</p>
            <p className="language-subtitle">अपनी भाषा चुनें / ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ</p>
          </div>

          <div className="language-options">
            {/* English Option */}
            <label className="language-option" htmlFor="lang-en">
              <input
                id="lang-en"
                type="radio"
                name="language_select"
                value="en"
                checked={selectedLanguage === 'en'}
                onChange={(e) => handleLanguageChange(e.target.value)}
              />
              <div className="option-icon">A</div>
              <div className="option-content">
                <span className="option-name">English</span>
                <span className="option-meta">Default</span>
              </div>
              <span className="material-symbols-outlined check-icon">check_circle</span>
            </label>

            {/* Hindi Option */}
            <label className="language-option" htmlFor="lang-hi">
              <input
                id="lang-hi"
                type="radio"
                name="language_select"
                value="hi"
                checked={selectedLanguage === 'hi'}
                onChange={(e) => handleLanguageChange(e.target.value)}
              />
              <div className="option-icon">अ</div>
              <div className="option-content">
                <span className="option-name">हिंदी</span>
                <span className="option-meta">Hindi</span>
              </div>
              <span className="material-symbols-outlined check-icon">check_circle</span>
            </label>

            {/* Punjabi Option */}
            <label className="language-option" htmlFor="lang-pa">
              <input
                id="lang-pa"
                type="radio"
                name="language_select"
                value="pa"
                checked={selectedLanguage === 'pa'}
                onChange={(e) => handleLanguageChange(e.target.value)}
              />
              <div className="option-icon">ੳ</div>
              <div className="option-content">
                <span className="option-name">ਪੰਜਾਬੀ</span>
                <span className="option-meta">Punjabi</span>
              </div>
              <span className="material-symbols-outlined check-icon">check_circle</span>
            </label>
          </div>
        </div>

        {/* Bottom Section: Action Button */}
        <div className="splash-footer animate-fade-up delay-200">
          <button className="start-button" onClick={handleStartPlaying}>
            <div className="button-glow"></div>
            <span className="button-text">
              Start Playing
              <span className="material-symbols-outlined button-icon">arrow_forward</span>
            </span>
          </button>
          <p className="app-version">v1.0.2 • AstroGuess Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
