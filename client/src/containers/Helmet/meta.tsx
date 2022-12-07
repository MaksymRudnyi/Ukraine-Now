import i18next from 'i18next';

export const meta = () => ({
  '/': {
    title: i18next.t('helmet.home.title'),
    description: i18next.t('helmet.home.description'),
  },
  '/about': {
    title: i18next.t('helmet.about.title'),
    description: i18next.t('helmet.about.description'),
  },
  '/404': {
    title: i18next.t('helmet.404.title'),
    description: i18next.t('helmet.404.description'),
  },
});
