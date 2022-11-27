import UIStore from './UIStore';
import i18next from 'i18next';
import { autorun, makeAutoObservable } from 'mobx';

export class RootStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  UI = new UIStore();
}

const store = new RootStore();

autorun(() => {
  if (store.UI.locale) {
    i18next.changeLanguage(store.UI.locale);
  }
});

export default store;
