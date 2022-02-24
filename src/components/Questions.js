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
  const [disButtons, setDisButtons] = useState({btns: [{id: 1, actually: false}, {id: 2, actually: false}, {id: 4, actually: false}, {id: 4, actually: false}]});
  const [button1, setButton1] = useState("secondary");
  const [button2, setButton2] = useState("info");
  const [button3, setButton3] = useState("warning");
  const [button4, setButton4] = useState("primary");
  const [disbaleButton, setDisbaleButton] = useState(false);
  const [restart, setRestart] = useState(false);
  const [pause, setPause] = useState(false);
  const [visible, setVisible] = useState(false);
  const [todos, setTodos] = useState([]);
  const [question, setQuestion] = useState();
  /*const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();*/
  const [correctAns, setCorrectAns] = useState();
  const [options, setOptions] = useState([]);

  const consumeApi = async () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty.toLowerCase()}&type=multiple`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    let optionsArray = [];
    setTodos(responseJSON);
    setQuestion(responseJSON.results[i].question);
    //setAnswer1(responseJSON.results[i].incorrect_answers[0]);
    optionsArray[0] = responseJSON.results[i].incorrect_answers[0];
    //setAnswer2(responseJSON.results[i].incorrect_answers[1]);
    optionsArray[1] = responseJSON.results[i].incorrect_answers[1];
    //setAnswer3(responseJSON.results[i].incorrect_answers[2]);
    optionsArray[2] = responseJSON.results[i].incorrect_answers[2];
    setCorrectAns(responseJSON.results[i].correct_answer);
    optionsArray[3] = responseJSON.results[i].correct_answer;
    randomizeOptions(optionsArray);
  };

  const randomizeOptions = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setOptions(a);
  }

  const handleVerifyQuestion = (answer, btn) => {
    if (i < 10) {
      if (answer === correctAns) {
        setCorrectAnswers([...correctAnswers, true]);
        handleReward();
        setPause(true);
        handleColor(true, btn);
        disableAllButtons();
        setTimeout(() => {
          nextQuestion();
          setRestart(!restart);
          setPause(false);
          resetColors();
          enableAllButtons();
        }, 5000);
      } else {
        setCorrectAnswers([...correctAnswers, false]);
        handleColor(false, btn);
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
    //npmsetI(10);
    disableAllButtons();
    setVisible(true);
  }

  const handleColor = (ans, btn) => {    
    if (ans === true) {
      if (btn === 1) {
        setButton1("success");
      } else if (btn === 2) {
        setButton2("success");
      } else if (btn === 3) {
        setButton3("success");
      } else {
        setButton4("success");
      }
    } else {
      if (btn === 1) {
        setButton1("danger");
        if(options[1] === correctAns){          
          setButton2("success");
        }else if(options[2] === correctAns){          
          setButton3("success");
        }else{          
          setButton4("success");
        }
      } else if (btn === 2) {
        setButton2("danger");
        if(options[0] === correctAns){
          setButton1("success");
        }else if(options[2] === correctAns){
          setButton3("success");
        }else{
          setButton4("success");
        }
      } else if (btn === 3) {
        setButton3("danger");
        if(options[0] === correctAns){
          setButton1("success");
        }else if(options[1] === correctAns){
          setButton2("success");
        }else{
          setButton4("success");
        }
      } else {
        setButton4("danger");
        if(options[0] === correctAns){
          setButton1("success");
        }else if(options[1] === correctAns){
          setButton2("success");
        }else{
          setButton3("success");
        }
      }
    }
  }

  const resetColors = () => {
    setButton1("secondary");
    setButton2("info");
    setButton3("warning");
    setButton4("primary")
  }
  const nextQuestion = async () => {
    if (i < 10) {
      const j = (i + 1);
      setI(j);
    } else {

    }
  };

  const disableAllButtons = () => {
    const buttons = disButtons.btns;
    buttons.map((b) => {      
        b.actually = true;
    });
  }

  const enableAllButtons = () => {
    const buttons = disButtons.btns;
    buttons.map((b) => {      
      b.actually = false;      
    });
  }


  useEffect(() => {
    consumeApi();
  }, [i]);

  return (
    <div>      
      <Link to={`/`}>
        <FontAwesomeIcon icon={faRightFromBracket} size="2x" className="row justify-content-left"/>      
      </Link>
      <Modal.Dialog size="lg">
        <Modal.Header>
          <Modal.Title>
            <b>Tiempo: <Timer restart={restart} pause={pause} setI={setI} setVisible={setVisible} />s</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>{question}</b></p>
        </Modal.Body>
        <Modal.Footer>
          <table className="row d-flex justify-content-center">
            <tr>
              <td>
                <Button variant={button1} style={{ width: "22rem" }} className="mb-2" 
                onClick={() => { handleVerifyQuestion(options[0], 1) }} disabled={disButtons.btns[0].actually}>
                  <b>{options[0]}</b>
                </Button>
              </td>
              <td>
                <Button variant={button2} style={{ width: "22rem" }} className="mb-2"
                  onClick={() => { handleVerifyQuestion(options[1], 2) }} disabled={disButtons.btns[1].actually}>
                  <b>{options[1]}</b>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant={button3} style={{ width: "22rem" }} className="mb-2" 
                onClick={() => { handleVerifyQuestion(options[2], 3) }} disabled={disButtons.btns[2].actually}>
                  <b>{options[2]}</b>
                </Button>
              </td>
              <td>
                <Button variant={button4} style={{ width: "22rem" }} className="mb-2" 
                onClick={() => { handleVerifyQuestion(options[3], 4) }} disabled={disButtons.btns[3].actually}>
                  <b>{options[3]}</b>
                </Button>
              </td>
            </tr>
          </table>
        </Modal.Footer>
      </Modal.Dialog>
      <EndGame visible={visible} i={i} reward={reward} />
    </div>
  );
};

export default Questions;
