import React from "react";
import {
  Col,
  Card,
  Image,
  Row,
  Nav,
  Button
} from "react-bootstrap";
import { removeFavDish } from "../http/dishAPI";
import { STATIC_PIC_URL } from "../utils/consts";


const FavRecipeItem = (id) => {
  const deleteItem = () => {
    removeFavDish(id.recipe.dishName);
  };

  const staticImage = STATIC_PIC_URL;
  return (
    <div className="mt-3">
      <Col>
        <Card
          style={{ width: 345 }}
          className="d-flex align-items-center"
          border={"dark"}>
          <Image
            className={"m-2"}
            width={330}
            height={250}
            src={id.recipe.img || staticImage} />
          <div>
            <Row style={{ maxWidth: 340 }}>
              <h4>{id.recipe.dishName}</h4>
              <div className="m-2">
                Ingredients: <br />
                <Row>{id.recipe.recipe.map((el, id) => <Row key={id}>{el}</Row>)}</Row>
                {id.recipe.srcYoutube ?
                  <Nav.Link href={id.recipe.srcYoutube}>Go to YouTube</Nav.Link> : <div />}
              </div>
            </Row>
          </div>
          <Button
            className="mb-1"
            variant="danger"
            onClick={deleteItem}
          >
            Remove
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default FavRecipeItem;
