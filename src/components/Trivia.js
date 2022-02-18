import React, { useState } from "react";
import NavbarGame from "./NavbarGame";
import Questions from "./Questions";
import RewardList from "./RewardList";
import "./assets/css/Trivia.css";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";

const Trivia = () => {  
  const [reward, setReward] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  let {user} = useParams();
  let {difficulty} = useParams();
  let {category} = useParams();
  
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
    <>
      <NavbarGame user={user} difficulty={handleDifficulty(difficulty)} reward={reward}/>
      <Table>
        <tr>
          <td >
            <Questions category={category} difficulty={handleDifficulty(difficulty)} correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer}/>
          </td>
          <td>
            <RewardList setReward={setReward} correctAnswer={correctAnswer} />
          </td>
        </tr>
      </Table>
    </>
  );
};

export default Trivia;
