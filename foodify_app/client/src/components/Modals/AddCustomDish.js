import React, { useState } from "react";
import { 
  Button, 
  FloatingLabel, 
  Form, 
  Modal
} from "react-bootstrap";
import { pushCustRecipe } from "../../http/dishAPI";

const addCustomDish = ({ show, onHide }) => {
  const [dishTitle, setDishTitle] = useState("");
  const [dishDescription, setDishDescription] = useState("");

  const data = {
    dishName: dishTitle,
    recipe: dishDescription,
  };

  const pushNewRecipe = () => {
    pushCustRecipe(data).then(onHide);
  };

  return (
    <Modal
      max-width={500}
      height={400}
      show={show}
      onHide={onHide}
      size="sg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Custom Dish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FloatingLabel label="Dish title" className="mb-3">
            <Form.Control
              placeholder={"Dish title"}
              type="text"
              value={dishTitle}
              onChange={e => setDishTitle(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel label="Dish coocking instructions">
            <Form.Control
              placeholder={"Your Dish Recipe..."}
              as="textarea"
              style={{ minHeight: "150px", maxHeight: "150px" }}
              fixed="true"
              value={dishDescription}
              onChange={e => setDishDescription(e.target.value)}
            />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type={"submit"} variant={"outline-secondary"} className="mt-3 w-100" onClick={pushNewRecipe}>Add custom dish</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default addCustomDish;
