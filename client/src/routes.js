import Favorites from "./pages/Favorites";
import RandomDish from "./pages/RandomDish";
import {FAVORITES_ROUTE, RANDOM_DISH_ROUTE} from "./utils/consts";

export const publicRoutes = [
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    },
    {
        path: RANDOM_DISH_ROUTE,
        Component: RandomDish
    }
];
