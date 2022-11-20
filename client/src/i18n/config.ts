import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { autorun } from 'mobx';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from '../constants';
import store from '../store';
import en from './en/index.json';
import ua from './ua/index.json';

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
      autorun(() => {
        store.UI.setLocale(i18next.language);
      });
    }
  );

export default i18next;
