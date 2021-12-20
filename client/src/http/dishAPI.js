
import { $host } from "./index";
import { 
  RANDOM_DISH_ROUTE, 
  ADD_FAVORITE_ROUTE, 
  ADD_CUSTOM_DISH_ROUTE, 
  GET_ALL_FAV_RECIPES_ROUTE,
  GET_ALL_CUST_RECIPES_ROUTE,
  DELETE_FAV_DISH_ROUTE,
  DELETE_CUSTOM_DISH_ROUTE
} from "../utils/consts";

export const callRecipe = async () => {
  const {data} = await $host.get(RANDOM_DISH_ROUTE);
  return data;
};

export const pushFavRecipe = async (obj) => {
  await $host.post(ADD_FAVORITE_ROUTE, obj);
};

export const pushCustRecipe = async (obj) => {
  await $host.post(ADD_CUSTOM_DISH_ROUTE, obj);
  return alert("The New recipe was added");
};

export const fetchFavRecipes = async () => {
  const {data} = await $host.get(GET_ALL_FAV_RECIPES_ROUTE);
  return data;
};

export const fetchCustRecipes = async () => {
  const {data} = await $host.get(GET_ALL_CUST_RECIPES_ROUTE);
  return data;
};

export const removeFavDish = async (dishName) => {
  await $host.post(DELETE_FAV_DISH_ROUTE, {dishName});
  return alert(`You have removed ${dishName}`);
};

export const removeCustDish = async (dishName) => {
  await $host.post(DELETE_CUSTOM_DISH_ROUTE, {dishName});
  return alert(`You have removed ${dishName}`);
};
