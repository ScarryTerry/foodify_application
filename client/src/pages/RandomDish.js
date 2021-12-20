import React, { useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import RecipeItem from "../components/RecipeItem";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { callRecipe, pushFavRecipe } from "../http/dishAPI";

const RandomDish = observer(() => {
  const { dish } = useContext(Context);

  const getRecipe = () => {
    callRecipe().then(data => dish.setNewDish(data));
  };

  const addFavRecipe = () => {
    const meals = dish.dish.meals[0];

    const img = meals.strMealThumb;
    const srcYoutube = meals.strYoutube;
    let dishName = "Dish Name";
    let recipe = "Lost recipe ;(";

    if (meals) {

      recipe = [];

      let ingredients = [];
      let measures = [];

      for (const key in meals) {
        for (let i = 1; i <= 20; i++) {
          if (key === `strIngredient${i}`) {
            ingredients.push((meals[key]));
          }
          if (key === `strMeasure${i}`) {
            measures.push(meals[key]);
          }
        }
      }

      ingredients = ingredients.filter(el => el !== null && el !== "");
      measures = measures.filter(el => el !== null && el !== "");

      for (let i = 0; i < ingredients.length; i++) {
        recipe.push([`${i + 1}. ${ingredients[i]} => ${measures[i]}; `]);
      }

      dishName = meals.strMeal;
    }

    const data = {
      dishName: dishName,
      recipe: recipe,
      img: img,
      srcYoutube: srcYoutube
    };

    pushFavRecipe(data);
  };

  useEffect(() => {
    if (dish._firstLoad) {
      getRecipe();
      dish.setFirstLoad(false);
    }
  });

  return (
    <div className="mt-5">
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {dish.dish.meals ? <RecipeItem /> : <div />}
          <Button
            variant="secondary"
            className="mt-1 m-1"
            style={{ width: 165 }}
            onClick={getRecipe}
          >
            Skip
          </Button>
          <Button
            variant="secondary"
            className="mt-1 m-1"
            style={{ width: 165 }}
            onClick={addFavRecipe}
          >
            Like
          </Button>
        </div>
      </Container>
    </div>
  );
});


export default RandomDish;
