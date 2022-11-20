import { makeAutoObservable } from 'mobx';
import { LOCALS } from '../constants';

export default class UIStore {
  public isMobileNavigationOpen: boolean;
  public locale: string;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.isMobileNavigationOpen = false;
    this.locale = LOCALS.EN;
  }

  public setIsMobileNavigationOpen() {
    this.isMobileNavigationOpen = !this.isMobileNavigationOpen;
  }

  public setLocale(locale: string) {
    this.locale = locale;
  }
}
