import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RewardList = ({setReward, correctAnswer}) => {

    return (
        <div>
            <Card bg="info" style={{ width: '20rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><b>10. $10000</b></ListGroup.Item>
                    <ListGroup.Item><b>9. $9000</b></ListGroup.Item>
                    <ListGroup.Item><b>8. $8000</b></ListGroup.Item>
                    <ListGroup.Item><b>7. $7000</b></ListGroup.Item>
                    <ListGroup.Item><b>6. $6000</b></ListGroup.Item>
                    <ListGroup.Item><b>5. $5000</b></ListGroup.Item>
                    <ListGroup.Item><b>4. $4000</b></ListGroup.Item>
                    <ListGroup.Item><b>3. $3000</b></ListGroup.Item>
                    <ListGroup.Item><b>2. $2000</b></ListGroup.Item>
                    <ListGroup.Item><b>1. $1000</b></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default RewardList