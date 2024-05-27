import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "portfolio": "Portfolio",
          "clients": "Clients",
          "contact": "Contact",
          "contact_me": "Contact Me"
      }
      },
      es: {
        translation: {
          "home": "Inicio",
          "about": "Sobre Mi",
          "portfolio": "Portfolio",
          "clients": "Clientes",
          "contact": "Contactar",
          "contact_me": "Contactame"
        }
      }
    }
  });

export default i18n;
