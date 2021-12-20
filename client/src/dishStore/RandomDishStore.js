import { makeAutoObservable } from "mobx";

export default class DishStore {
  constructor() {
    this._dish = {};
    this._firstLoad = true;
    makeAutoObservable(this);
  }

  setNewDish(newDish) {
    this._dish = newDish;
  }

  setFirstLoad(bool) {
    this._firstLoad = bool;
  }

  get dish() {
    return this._dish;
  }

  get firstLoad() {
    return this._firstLoad;
  }
}
