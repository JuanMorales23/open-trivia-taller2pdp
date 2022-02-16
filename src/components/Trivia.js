import React from "react";
import NavbarGame from "./NavbarGame";
import Questions from "./Questions";
import RewardList from "./RewardList";
import "./assets/css/Trivia.css";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";

const Trivia = () => {

  let {user} = useParams();
  let {difficulty} = useParams();
  console.log(`Parametros: ${user}; ${difficulty}`);

  return (
    <>
      <NavbarGame user={user} difficulty={difficulty} />
      <Table>
        <tr>
          <td >
            <Questions />
          </td>
          <td>
            <RewardList />
          </td>
        </tr>
      </Table>
    </>
  );
};

export default Trivia;
