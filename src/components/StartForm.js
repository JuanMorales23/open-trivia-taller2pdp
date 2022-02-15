import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

const StartForm = () => {
  return (
    <> 
    <Modal.Dialog centered size="lg" className="container"> 
      <Form className="container">
          <Form.Group size="lg">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Usuario" />
            <Form.Label>Categoria</Form.Label>
            <Form.Select type="text">
              <option value="1">General Knowledge</option>
              <option value="2">Entertainment: Books</option>
              <option value="3">Entertainment: Film</option>
              <option value="4">Entertainment: Music</option>
              <option value="5">Entertainment: Musicals & Theatres</option>
              <option value="6">Entertainment: Television</option>
            </Form.Select>
            <Form.Label>Dificultad</Form.Label>
            <Form.Select className="col-2">
              <option value="1">Easy</option>
              <option value="2">Medium</option>
              <option value="3">Hard</option>
            </Form.Select>
            <Link
              to="/trivia"
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
