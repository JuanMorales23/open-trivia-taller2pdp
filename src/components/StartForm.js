import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import trivia_categories from "./assets/js/trivia_categories";
import Button from 'react-bootstrap/Button';

const StartForm = () => {
  const triviaCategories = trivia_categories;

  const userNameRef = useRef();
  const difficultyRef = useRef();
  const categoryRef = useRef();

  const [user, setUser] = useState();
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();
  console.log(triviaCategories);

  const handleForm = () => {
    setUser(userNameRef.current.value);
    setDifficulty(difficultyRef.current.value);
    setCategory(categoryRef.current.value);
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
            <Form.Control type="text" placeholder="" ref={userNameRef} onChange={handleForm} required/>
            <Form.Label>Categoria</Form.Label>
            <Form.Select type="text" ref={categoryRef} onChange={handleForm}>
              {triviaCategories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </Form.Select>
            <Form.Label>Dificultad</Form.Label>
            <Form.Select className="col-2" ref={difficultyRef} onChange={handleForm} >
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </Form.Select>

 
            <Link
              to={`/trivia/${user}/${category}/${difficulty}`}
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
