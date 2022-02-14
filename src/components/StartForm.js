import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Trivia from './Trivia';

const StartForm = () => {
  return (
    <>
    <Form>
    <Form.Group className="mb-2" controlId="formBasicEmail">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="text" placeholder="Usuario" />
    </Form.Group>
    <Form.Label>Categoria</Form.Label>
    <Form.Select>
      <option>Categoria</option>
      <option value="1">General Knowledge</option>
      <option value="2">Entertainment: Books</option>
      <option value="3">Entertainment: Film</option>
      <option value="4">Entertainment: Music</option>
      <option value="5">Entertainment: Musicals & Theatres</option>
      <option value="6">Entertainment: Television</option>
    </Form.Select>
    <Form.Label>Dificultad</Form.Label>
    <Form.Select>
      <option>Dificultad</option>
      <option value="1">Easy</option>
      <option value="2">Medium</option>
      <option value="3">Hard</option>
    </Form.Select>
    <Button variant="primary" type="submit">
      Ingresar
    </Button>
  </Form>
  <Trivia></Trivia>
  </>    
  )
}

export default StartForm;
