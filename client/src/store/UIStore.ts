import { makeAutoObservable } from 'mobx';

export default class UIStore {
  isMobileNavigationOpen: boolean = false;
  locale: string | undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setIsMobileNavigationOpen() {
    this.isMobileNavigationOpen = !this.isMobileNavigationOpen;
  }

  public setLocale(locale: string) {
    this.locale = locale;
  }
}
