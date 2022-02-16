import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./assets/css/Trivia.css";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";


const Questions = () => {
  let {category} = useParams();
  console.log("categoria: "+ category);
  let {difficulty} = useParams();
  console.log("dificultad: "+ difficulty);

    const [todos, setTodos] = useState([]);
    const [i, setI] = useState(0);
    const [question, setQuestion] = useState();
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    const [answer3, setAnswer3] = useState();
    const [answer4, setAnswer4] = useState();
    
   // const {name} = useParams();
   // console.log(name);

  const consumeApi = async () => {
    const url = `https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple`;
    const response = await fetch(url);
    console.log(response.statusText);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
    setQuestion(responseJSON.results[i].question);
    setAnswer1(responseJSON.results[i].incorrect_answers[0]);
    setAnswer2(responseJSON.results[i].incorrect_answers[1]);
    setAnswer3(responseJSON.results[i].incorrect_answers[2]);
    setAnswer4(responseJSON.results[i].correct_answer);
  };

  const nextQuestion = async () => {
    const j = (i+1);
    setI(j);

  };
  useEffect(() => {
    consumeApi();
  }, [i]);

  return (
    <div>
      <Modal.Dialog size="lg">
        <Modal.Header>
          <Modal.Title>Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>{question}</b></p>
        </Modal.Body>
        <Modal.Footer>
          <table  className="row d-flex justify-content-center">
            <tr>
              <td>
              <Button variant='danger' style={{ width: "22rem" }} className="mb-2" onClick={nextQuestion}>
                   <b>{answer1}</b>
              </Button>
              </td>
              <td>
              <Button variant="info" style={{ width: "22rem" }} className="mb-2" onClick={nextQuestion}>
                   <b>{answer2}</b>
              </Button>
              </td>
            </tr>
            <tr>
              <td>
              <Button variant="warning" style={{ width: "22rem" }} className="mb-2" onClick={nextQuestion}>
                   <b>{answer3}</b>
              </Button>
              </td>
              <td>
              <Button variant="success" style={{ width: "22rem" }} className="mb-2" onClick={nextQuestion}>
                   <b>{answer4}</b>
              </Button>
              </td>
            </tr>
          </table>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Questions;
