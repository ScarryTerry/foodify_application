const FoodifyAPI = require("../API/foodifyAPI");

class RandomDishController {

  async getPage(req, res) {
    const randomDish = await new FoodifyAPI().getRecipe(); 
    res.json(randomDish);
  }
}

module.exports = new RandomDishController();
