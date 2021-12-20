const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  dishName: { type: String, required: true },
  recipe: [[{ type: String, required: true }]],
  img: { type: String},
  srcYoutube: { type: String},
});

module.exports = mongoose.model("Dish", DishSchema);
