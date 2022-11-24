import { LOCALS } from '../constants';
import store from '../store';
import en from './en/index.json';
import ua from './ua/index.json';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const resources = {
  [LOCALS.EN]: {
    translation: en,
  },
  [LOCALS.UK]: {
    translation: ua,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(
    {
      debug: true,
      resources,
      fallbackLng: LOCALS.EN,
    },
    () => {
      store.UI.setLocale(i18next.language);
    }
  );

export default i18next;
