import React from "react";
import NavbarGame from "./NavbarGame";
import Questions from "./Questions";
import RewardList from "./RewardList";
import "./assets/css/Trivia.css";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";

const Trivia = () => {

  let {user} = useParams();
  console.log(`Usuario en Trivia ${user}`);

  return (
    <>
      <NavbarGame />
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
