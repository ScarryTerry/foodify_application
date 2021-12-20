import React, { useContext } from "react";
import { 
  Col, 
  Card, 
  Image, 
  Row, 
  Nav 
} from "react-bootstrap";
import {STATIC_PIC_URL} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const RecipeItem = observer(() => {
  const { dish } = useContext(Context);
  const staticImage = STATIC_PIC_URL;

  let meals;

if (dish.dish) {
  meals = dish.dish.meals[0];
}

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

  return (
    <div className="mt-5">
      <Col md={3}>
        <Card 
        style={{ width: 345, cursor: "pointer" }} 
        className="d-flex align-items-center" 
        border={"dark"}>
          <Image 
          className={"m-2"} 
          width={330} 
          height={250} 
          src={img || staticImage} />
          <div>
            <Row style={{ maxWidth: 340 }}>
              <h4>{dishName}</h4>
              <div className="m-2">
                Ingredients: <br />
                {recipe.map((el, id) => <Row key={id}>{el}</Row>)}
                {srcYoutube ? 
                <Nav.Link href={srcYoutube}>Go to YouTube</Nav.Link> : <div/>}
              </div>
            </Row>
          </div>
        </Card>
      </Col>
    </div>
  );
});

export default RecipeItem;
