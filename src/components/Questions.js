import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import "./assets/css/Trivia.css";

const Questions = () => {
    const [todos, setTodos] = useState([]);
    const [question, setQuestion] = useState();
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    const [answer3, setAnswer3] = useState();
    const [answer4, setAnswer4] = useState();


  const consumeApi = async () => {
    const url = "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";
    const response = await fetch(url);
    console.log(response.statusText);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
    setQuestion(responseJSON.results[1].question);
    setAnswer1(responseJSON.results[1].incorrect_answers[0]);
    setAnswer2(responseJSON.results[1].incorrect_answers[1]);
    setAnswer3(responseJSON.results[1].incorrect_answers[2]);
    setAnswer4(responseJSON.results[1].correct_answer);

  };
  useEffect(() => {
    consumeApi();
  }, []);

  return (
    <div>
      <Modal.Dialog size="lg">
        <Modal.Header>
          <Modal.Title>Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{todos.response_code}</p>
          <p><b>{question}</b></p>
        </Modal.Body>
        <Modal.Footer>
          <Table variant="dark" className="row d-flex justify-content-center">
            <tr>
              <td>
                <Card bg="danger" style={{ width: "22rem" }} className="mb-2">
                  <Card.Body>
                    <Card.Text className="text-white"><b>{answer1}</b></Card.Text>
                  </Card.Body>
                </Card>
              </td>
              <td>
                <Card bg="info" style={{ width: "22rem" }} className="mb-2">
                  <Card.Body>
                    <Card.Text className="text-white"><b>{answer2}</b></Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
            <tr>
              <td>
                <Card bg="warning" style={{ width: "22rem" }} className="mb-2">
                  <Card.Body>
                    <Card.Text className="text-white"><b>{answer3}</b></Card.Text>
                  </Card.Body>
                </Card>
              </td>
              <td>
                <Card bg="success" style={{ width: "22rem" }} className="mb-2">
                  <Card.Body>
                    <Card.Text className="text-white"><b>{answer4}</b></Card.Text>
                  </Card.Body>
                </Card>
              </td>
            </tr>
          </Table>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Questions;
