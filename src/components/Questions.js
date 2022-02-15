import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Questions = () => {
    return (
        <div>
            <Modal.Dialog aria-labelledby="contained-modal-title-vcenter"
      centered size="lg">
                <Modal.Header>
                    <Modal.Title>Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                <table>
                    <tr>
                        <td>
                            <Card
                                bg="danger"
                                style={{ width: '12rem' }}
                                className="mb-2">
                                <Card.Body>
                                    <Card.Text className="text-white">
                                       Option 1
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card
                                bg="info"
                                style={{ width: '12rem' }}
                                className="mb-2">
                                <Card.Body>
                                    <Card.Text className="text-white">
                                       Option 2
                                    </Card.Text>
                                </Card.Body>
                            </Card></td>
                    </tr>
                    <tr>
                        <td>
                            <Card
                                bg="warning"
                                style={{ width: '12rem' }}
                                className="mb-2">
                                <Card.Body>
                                    <Card.Text className="text-white">
                                       Option 3
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </td>
                        <td>
                            <Card
                                bg="success"
                                style={{ width: '12rem' }}
                                className="mb-2">
                                <Card.Body>
                                    <Card.Text className="text-white">
                                       Option 1
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </td>
                    </tr>
                </table>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Questions;