import { makeAutoObservable } from "mobx";

export default class FavDishStore {
  constructor() {
    this._favDish = [];
    this._firstLoad = true;
    makeAutoObservable(this);
  }

  setNewFavDish(newDish) {
    this._favDish = newDish;
  }

  setFirstLoad(bool) {
    this._firstLoad = bool;
  }

  get favDish() {
    return this._favDish;
  }

  get firstLoad() {
    return this._firstLoad;
  }
}
