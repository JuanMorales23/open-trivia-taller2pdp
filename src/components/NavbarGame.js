import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarGame = ({user, difficulty, reward}) => {

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="">Jugador: {user}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Nivel: {difficulty}</Nav.Link>
            <Nav.Link href="">Ganacia: $ {reward} </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarGame;
