import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FavDishStore from "./dishStore/FavDishStore";
import DishStore from "./dishStore/RandomDishStore";
import CustDishStore from "./dishStore/CustDishStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    dish: new DishStore(),
    favDish: new FavDishStore(),
    custDish: new CustDishStore()
  }}>
    <App />
  </Context.Provider>,

  document.getElementById("root")
);
