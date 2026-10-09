import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importamos los JSON
import translationES from './locales/es.json';
import translationEN from './locales/en.json';

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador automáticamente
  .use(initReactI18next) // Pasa i18n a React
  .init({
    resources,
    fallbackLng: 'es', // Si falla algo, el idioma por defecto es español
    interpolation: {
      escapeValue: false // React ya protege contra inyecciones XSS
    }
  });

export default i18n;