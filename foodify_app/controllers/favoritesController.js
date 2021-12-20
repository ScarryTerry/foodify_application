const favDish = require("../model/favDish");

class FavoritesDishController {

  async getAllrecipes(req, res) {
    const data = await favDish.find();
    return res.json(data);
  }

  async addToFavorites(req, res) {
    const {dishName, recipe, img, srcYoutube } = req.body;

    const existingRecipe = await favDish.findOne({dishName});

    if (existingRecipe) {
      return res.status(409).json({message: "dish has already added"});
    }

    const dish = await favDish.create({
      dishName: dishName,
      recipe: recipe,
      img: img,
      srcYoutube: srcYoutube
    });

    return res.status(200).json(dish);
  }

  async removeFromFavorites(req, res) {
    const {dishName} = req.body;

    let dish = await favDish.findOne({ dishName });

    if (!dish) {
      return res.status(404).json({ message: "Dish does not exist" });
    }

    dish = await favDish.deleteOne({ dishName });

    return res.json(dish);
  }
}

module.exports = new FavoritesDishController();
