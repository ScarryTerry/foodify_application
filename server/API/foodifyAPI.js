const axios = require("axios").default;

class FoodifyAPI {
  async getRecipe() {
    try {
      // eslint-disable-next-line no-undef
      let promise = await axios(process.env.RANDOM_RECIPE_API_URL);

      return promise.data;
    } catch (err) {
      console.error(err);
    }
  }

}

module.exports = FoodifyAPI;
