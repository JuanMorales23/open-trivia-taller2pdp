import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import trivia_categories from "./assets/js/trivia_categories";

const StartForm = () => {
  const triviaCategories = trivia_categories;

  const userNameRef = useRef();
  const difficultyRef = useRef();
  const categoryRef = useRef();

  let user = "123";
  let difficulty = "";
  let category = "";
  console.log(triviaCategories);

  const assingData = () =>{
    user = userNameRef.current.value;
    difficulty = difficultyRef.current.value;
    category = categoryRef.current.value;

    console.log(`El usuario es: ${user}`);
    console.log(`La Dificultad es: ${difficulty}`);
    console.log(`La Categoria es: ${category}`);
  }

  return (
    <>
      <Modal.Dialog centered size="lg" className="container">
        <Form className="container">
          <Form.Group size="lg">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="" ref={userNameRef}  />
            <Form.Label>Categoria</Form.Label>
            <Form.Select type="text" ref={categoryRef}>
              {triviaCategories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
            <Form.Label>Dificultad</Form.Label>
            <Form.Select className="col-2" ref={difficultyRef} >
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </Form.Select>
            <Link
              onClick={assingData}
              to={`/trivia/${user}`}
              variant="primary"
              type="submit"
              className="btn btn-dark"
            >
              Ingresar
            </Link>
          </Form.Group>
        </Form>
      </Modal.Dialog>
    </>
  );
};

export default StartForm;
