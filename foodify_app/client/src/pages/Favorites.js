import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { Container, Col} from "react-bootstrap";
import FavRecipeItem from "../components/FavRecipeItem";
import CustRecipeItem from "../components/CustRecipeItem";
import { fetchFavRecipes, fetchCustRecipes } from "../http/dishAPI";
import { Context } from "../index";

const Favorites = observer(() => {
  const { favDish } = useContext(Context);
  const { custDish } = useContext(Context);

  const getLists = () => {
    fetchFavRecipes().then(favData => favDish.setNewFavDish(favData));
    fetchCustRecipes().then(custData => custDish.setNewCustDish(custData));
  };

  useEffect(() => {
    if (favDish._firstLoad) {
      getLists();
      favDish.setFirstLoad(false);
    }
  });

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <Col style={{mx: 2}}>
        <h4 className="mt-1">Your Favorite Dishes: </h4>
          <div>
            {favDish.favDish.map((el, id) =>
              <FavRecipeItem key={id} recipe={el} />
            )}
          </div>
        </Col>
        <Col style={{mx: 2}}>
        <h4 className="mt-1">Your Custom Dishes: </h4>
          <div>
            {custDish.custDish.map((el, id) =>
              <CustRecipeItem key={id} recipe={el} />
            )}
          </div>
        </Col>
      </div>
      <div className="footer mt-4"></div>
    </Container>
  );
});

export default Favorites;
