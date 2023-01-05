import { makeAutoObservable } from 'mobx';

class LayoutStore {
  isMobileSidesActive = false;

  constructor() {
    makeAutoObservable(this);
  }

  triggerMobileSidesActive = (bool) => {
    this.isMobileSidesActive = bool;
  };
}

export default new LayoutStore();
