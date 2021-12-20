import { makeAutoObservable } from "mobx";

export default class CustDishStore {
  constructor() {
    this._custDish = [];
    makeAutoObservable(this);
  }

  setNewCustDish(newDish) {
    this._custDish = newDish;
  }

  get custDish() {
    return this._custDish;
  }
}
