import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from 'src/locales/es.json';
import en from 'src/locales/en.json';
import ar from 'src/locales/ar.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  lng: 'es',

  resources: {
    es,
    en,
    ar,
  },

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: false,

  // cache: {
  //   enabled: true
  // },

  interpolation: {
    escapeValue: false, // not needed for react as it does escape per default to prevent xss!
  },
});

export default i18n;
