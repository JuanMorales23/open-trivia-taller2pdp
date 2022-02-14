import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarGame = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="">Jugador: </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Nivel: </Nav.Link>
            <Nav.Link href="">Ganacia: $</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarGame;
