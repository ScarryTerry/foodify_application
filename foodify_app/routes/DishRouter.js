const router = require("express").Router();
const RandomDishController = require("../controllers/RandomDishController");
const FavoritesDishController = require("../controllers/FavoritesController");
const CustomDishController = require("../controllers/CustomDishController");

class DishRouter {

  getRoutes() {
    router.get("/randomDish", (req, res) => (RandomDishController.getPage(req, res)));

    router.get("/favDishes", (req, res) => (FavoritesDishController.getAllrecipes(req, res)));

    router.post("/addFavorites", (req, res) => (FavoritesDishController.addToFavorites(req, res)));

    router.post("/removeFavorites", (req, res) => (FavoritesDishController.removeFromFavorites(req, res)));

    router.post("/removeCustom", (req, res) => (CustomDishController.removeCustomDish(req, res)));

    router.post("/addCustomDish", (req, res) => (CustomDishController.addCustomDish(req, res)));

    router.get("/custDishes", (req, res) => (CustomDishController.getCustomRecipes(req, res)));

    return router;
  }
}


module.exports = DishRouter;
