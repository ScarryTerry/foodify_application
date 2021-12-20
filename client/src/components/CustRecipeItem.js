import React from "react";
import {
  Col,
  Card,
  Image,
  Row,
  Button
} from "react-bootstrap";
import { removeCustDish } from "../http/dishAPI";
import { STATIC_PIC_URL } from "../utils/consts";

const CustRecipeItem = (id) => {
  const deleteItem = () => {
    removeCustDish(id.recipe.dishName);
  };

  const staticImage = STATIC_PIC_URL;
  return (
    <div className="mt-3">
      <Col md={3}>
        <Card
          style={{ width: 345, cursor: "pointer" }}
          className="d-flex align-items-center"
          border={"dark"}>
          <Image
            className={"m-2"}
            width={330}
            height={250}
            src={staticImage} />
          <div>
            <Row style={{ maxWidth: 340 }}>
              <h4>{id.recipe.dishName}</h4>
              <div className="m-2">
                Ingredients: <br />
                <Row>{id.recipe.recipe}</Row>
              </div>
            </Row>
          </div>
          <Button
            className="mb-1"
            variant="danger"
            onClick={deleteItem}
          >
            Remove</Button>
        </Card>
      </Col>
    </div>
  );
};

export default CustRecipeItem;
