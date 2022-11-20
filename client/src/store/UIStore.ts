import { makeAutoObservable } from 'mobx';

export default class UIStore {
  public isMobileNavigationOpen: boolean;
  constructor(root) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.isMobileNavigationOpen = false;
  }

  public setIsMobileNavigationOpen() {
    this.isMobileNavigationOpen = !this.isMobileNavigationOpen;
  }
}
