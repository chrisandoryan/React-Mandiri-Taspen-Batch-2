import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let todoDescription = e.target.inputTodoDescription.value;
        let todoDeadline = e.target.inputTodoDeadline.value;

        this.props.saveNewTodo(todoDescription, todoDeadline);
        this.props.handleCloseModal();
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleCloseModal}>
                <Form onSubmit={this.handleFormSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>What do you want to do?</Form.Label>
                            <Form.Control type="text" name="inputTodoDescription" placeholder="e.g., play with children" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" name="inputTodoDeadline" ></Form.Control>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleCloseModal} variant="secondary">
                        Close
                    </Button>
                    <Button type="submit" variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
            </Modal>
        );
    }
}

export default TodoForm;