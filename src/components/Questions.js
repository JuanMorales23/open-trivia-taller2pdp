import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./assets/css/Trivia.css";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import EndGame from "./EndGame";
import Timer from "./Timer";


const Questions = ({ category, difficulty, correctAnswers, setCorrectAnswers, reward, setReward, i, setI }) => {
  let accumulated = 0;
  const [restart, setRestart] = useState(false);
  const [pause, setPause] = useState(false);
  const [visible, setVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  const [question, setQuestion] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();

  const consumeApi = async () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    setQuestion(responseJSON.results[i].question);
    setAnswer1(responseJSON.results[i].incorrect_answers[0]);
    setAnswer2(responseJSON.results[i].incorrect_answers[1]);
    setAnswer3(responseJSON.results[i].incorrect_answers[2]);
    setAnswer4(responseJSON.results[i].correct_answer);
  };

  const handleVerifyQuestion = (answer) => {
    if (i < 10) {
      if (answer === answer4) {
        setCorrectAnswers([...correctAnswers, true]);
        handleReward();
        setPause(true);        
        setTimeout(() => {
          nextQuestion();  
          setRestart(!restart);
          setPause(false);
        }, 5000);
        
      } else {
        setCorrectAnswers([...correctAnswers, false]);
        handleEndGame();
        setPause(true);
      }
    }
  }

  const handleReward = () => {
    accumulated = reward + (i + 1) * 1000;
    setReward(accumulated);    
  }

  const handleEndGame = () => {
    setI(10);
    setVisible(true);
  }

  const nextQuestion = async () => {
    if (i < 10) {
      const j = (i + 1);
      setI(j);      
    } else {

    }
  };

  useEffect(() => {
    consumeApi();    
  }, [i]);

  return (
    <div>
      <Link to={`/`}>
        <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
      </Link>

      <Modal.Dialog size="lg">
        <Modal.Header> 
          <Modal.Title>
            <Timer restart={restart} pause={pause} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>{question}</b></p>
        </Modal.Body>
        <Modal.Footer>
          <table className="row d-flex justify-content-center">
            <tr>
              <td>
                <Button variant='danger' style={{ width: "22rem" }} className="mb-2" onClick={() => { handleVerifyQuestion(answer1)() }}>
                  <b>{answer1}</b>
                </Button>
              </td>
              <td>
                <Button variant="info" style={{ width: "22rem" }} className="mb-2" onClick={() => { handleVerifyQuestion(answer2) }}>
                  <b>{answer2}</b>
                </Button>
              </td> 
            </tr>
            <tr>
              <td>
                <Button variant="warning" style={{ width: "22rem" }} className="mb-2" onClick={() => { handleVerifyQuestion(answer3) }}>
                  <b>{answer3}</b>
                </Button>
              </td>
              <td>
                <Button variant="success" style={{ width: "22rem" }} className="mb-2" onClick={() => { handleVerifyQuestion(answer4) }}>
                  <b>{answer4}</b>
                </Button>
              </td>
            </tr>
          </table>
        </Modal.Footer>
      </Modal.Dialog>
      <EndGame visible={visible} i={i} accumulated={accumulated}/>
    </div>
  );
};

export default Questions;
