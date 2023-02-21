import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { API } from '../constants';
import axios from 'axios';

export default class UIStore {
  isMobileNavigationOpen: boolean = false;
  locale: string | undefined;
  countries: object = {};

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    reaction(() => this.locale, this.fetchCountries);
  }

  public setIsMobileNavigationOpen() {
    this.isMobileNavigationOpen = !this.isMobileNavigationOpen;
  }

  public setLocale(locale: string) {
    this.locale = locale;
  }

  private fetchCountries = async () => {
    const response = await axios(`${API}/countries?locale=${this.locale}`);

    console.log('response: ', response);
    runInAction(() => {
      this.countries = response.data;
    });
  };
}
