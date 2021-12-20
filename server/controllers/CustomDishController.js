const CustDish = require("../model/custDish");

class AddCustomDishController {

  async addCustomDish(req, res) {
    const { dishName, recipe } = req.body;

    const existingRecipe = await CustDish.findOne({ dishName });

    if (existingRecipe) {
      return res.status(409).json({ message: "dish has already added" });
    }

    const dish = await CustDish.create({
      dishName: dishName,
      recipe: recipe,
    });

    return res.status(200).json(dish);
  }

  async getCustomRecipes(req, res) {
    const data = await CustDish.find();

    return res.json(data);
  }

  async removeCustomDish(req, res) {
    const { dishName } = req.body;

    let dish = await CustDish.findOne({ dishName });

    if (!dish) {
      return res.status(404).json({ message: "Dish does not exist" });
    }

    dish = await CustDish.deleteOne({ dishName });

    return res.json(dish);
  }
}

module.exports = new AddCustomDishController();
