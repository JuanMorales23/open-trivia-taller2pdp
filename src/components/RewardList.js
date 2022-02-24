import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import level_prizes from "./assets/js/level_prizes";
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import "./assets/css/Trivia.css";

const RewardList = ({ correctAnswers, i }) => {
    const [levelPrizes, setLevelPrizes] = useState(level_prizes);
    let icon = null;
    const [listI, setListI] = useState([]);


    /* const handleIcon = (id) => {
         console.log("array: " + correctAnswers[i])
         if (i === (id - 1)) {            
             console.log("list i: " + id)
             if (correctAnswers[i] === true) {
                 console.log("Entra en el true")                
                 icon = <FontAwesomeIcon icon={faCheck} />;
                 return icon;
             } else if (correctAnswers[i] === false) {
                 console.log("Entra en el false")
                 icon = <FontAwesomeIcon icon={faXmark} />;
                 return (icon);
             } else if (correctAnswers[i] === undefined) {
                 console.log("Entra en el undefined")
             }
         } else {
         }
     }*/

    //{levelPrizes.map((list) => <ListGroup.Item key={list.id}><b>{list.id}. {list.prize} {handleIcon(list.id)}</b></ListGroup.Item>)}                    

    /*useEffect(() => {

    }, [correctAnswers])*/

    /*Codigo anterior
    <ListGroup variant="flush">
                    <ListGroup.Item><b>10. $10000 {handleIcon(10)}</b></ListGroup.Item>
                    <ListGroup.Item><b>9. $9000 {handleIcon(9)}</b></ListGroup.Item>
                    <ListGroup.Item><b>8. $8000 {handleIcon(8)}</b></ListGroup.Item>
                    <ListGroup.Item><b>7. $7000 {handleIcon(7)}</b></ListGroup.Item>
                    <ListGroup.Item><b>6. $6000 {handleIcon(6)}</b></ListGroup.Item>
                    <ListGroup.Item><b>5. $5000 {handleIcon(5)}</b></ListGroup.Item>
                    <ListGroup.Item><b>4. $4000 {handleIcon(4)}</b></ListGroup.Item>
                    <ListGroup.Item><b>3. $3000 {handleIcon(3)}</b></ListGroup.Item>
                    <ListGroup.Item><b>2. $2000 {handleIcon(2)}</b></ListGroup.Item>
                    <ListGroup.Item><b>1. $1000 {handleIcon(1)}</b></ListGroup.Item>
                </ListGroup>*/


    return (
        <div>
            <Card border="info" style={{ width: '20rem' }}>
                <Table className="table" responsive="sm">
                    <tbody>
                        {levelPrizes.map((x) => {
                            console.log("first")
                            if(x.id === i){
                                return (
                                    <tr>
                                        <td>
                                            <b>{x.id}. </b>
                                        </td>
                                        <td>
                                            <b>{x.prize}    </b>                                            
                                            {x.icon = <FontAwesomeIcon icon={faCheck} className="greenColor"/>}
                                        </td>                                        
                                    </tr>
                                );
                            }else{
                                return (
                                    <tr>
                                        <td>
                                            <b>{x.id}. </b>
                                        </td>
                                        <td>
                                            <b>{x.prize}</b>
                                            {x.icon}
                                        </td>
                                    </tr>
                                );
                            }
                            })}
                    </tbody>
                </Table>
            </Card>
        </div>
    )
}

export default RewardList