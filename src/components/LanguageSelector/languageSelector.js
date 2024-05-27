  import React from 'react';
  import { useTranslation } from 'react-i18next';
  import './languageSelector.css';

  const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="language-selector-container">
      <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      </div>
    );
  };

  export default LanguageSelector;