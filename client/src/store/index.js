import { makeAutoObservable } from 'mobx';
import UIStore from './UIStore';

export class RootStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  UI = new UIStore();
}

export default new RootStore();
