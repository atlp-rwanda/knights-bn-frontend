import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import '../assets/styles/components/languages.scss';

const Languages = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(navigator.language);
  const { t: translate } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleChange = (e) => {
    const newLang = e.target.value;

    if (newLang !== 'ki' && newLang !== 'en' && newLang !== 'fr') return;
    setLanguage(newLang);
  };

  return (
    <select className="lang lang--list" onChange={(e) => handleChange(e)}>
      <option>
        {translate('Choose language.1')}
      </option>
      <option value="ki">ikinyarwanda </option>
      <option value="en">english</option>
      <option value="fr">français</option>
    </select>
  );
};
export default Languages;
