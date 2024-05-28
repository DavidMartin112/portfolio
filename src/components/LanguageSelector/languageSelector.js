  import React, { useState, useEffect, useRef } from 'react';
  import { useTranslation } from 'react-i18next';
  import './languageSelector.css';
  import España from '../../assets/spain-icon.png';
  import English from '../../assets/english-icon.png';

  const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownContent = useRef(null);

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setLanguage(lng);
      setDropdownOpen(false);
    };

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
      if (dropdownContent.current && !dropdownContent.current.contains(event.target) &&
          !event.target.closest('.dropbtn')) {
            setDropdownOpen(false);
      }
  };

  useEffect(() => {
      if (dropdownOpen) {
          document.addEventListener('click', handleClickOutside);
      } else {
          document.removeEventListener('click', handleClickOutside);
      }
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, [dropdownOpen]);

    return (
      <div className="language-selector-container">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            {language === 'en' ? <img src={English} alt='English' /> : <img src={España} alt='Español' />}
          </button>
          {dropdownOpen && (
          <div className="dropdown-content" ref={dropdownContent}>
            <div onClick={() => changeLanguage('en')}>
              <img src={English} alt='English' /> English
            </div>
            <div onClick={() => changeLanguage('es')}>
              <img src={España} alt='Español' /> Español
            </div>
          </div>
        )}
        </div>
      </div>
    );
  };

  export default LanguageSelector;