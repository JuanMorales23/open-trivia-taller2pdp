import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarGame = ({user, difficulty}) => {

  const handleDifficulty = (dif) =>{
      if(dif === "1"){
        return "Easy";
      }else if(dif === "2"){
        return "Medium";
      }else if(dif === "3"){
        return "Hard";
      }
  }
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="">Jugador: {user}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Nivel: {handleDifficulty(difficulty)}</Nav.Link>
            <Nav.Link href="">Ganacia: $</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarGame;
