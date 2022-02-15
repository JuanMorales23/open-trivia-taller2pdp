import React from "react";
import NavbarGame from "./NavbarGame";
import Questions from "./Questions";
import RewardList from "./RewardList";
import "./assets/css/Trivia.css";
import Table from 'react-bootstrap/Table';

const Trivia = () => {
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
