import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import level_prizes from "./assets/js/level_prizes";

const RewardList = ({correctAnswers, i}) => {
    const levelPrizes = level_prizes;
    
    const handleIcon = () => {    
        let array = [];
        /*array = correctAnswers.map((x) => {
            if(x === true){
                return (<FontAwesomeIcon icon={faCheck} />);
            }else if(x === false){
                return (<FontAwesomeIcon icon={faXmark} />);
            }else{
                return "";
            }
        });*/        
        if(array[i] === true){
            return (<FontAwesomeIcon icon={faCheck} />);
        }else if(array[i] === false){
            return (<FontAwesomeIcon icon={faXmark} />);
        }else{

        }
    }

    return (
        <div>
            <Card bg="info" style={{ width: '20rem' }}>
                <ListGroup variant="flush">
                    {levelPrizes.map((list) => <ListGroup.Item key={list.id}><b>{list.id}. {list.prize} {handleIcon()}</b></ListGroup.Item>)}                    
                </ListGroup>
            </Card>
        </div>
    )
}

export default RewardList