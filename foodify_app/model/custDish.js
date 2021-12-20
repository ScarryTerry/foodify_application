const mongoose = require("mongoose");

const CustomDishSchema = new mongoose.Schema({
  dishName: { type: String, required: true },
  recipe: { type: String, required: true },
});

module.exports = mongoose.model("CustomDish", CustomDishSchema);
