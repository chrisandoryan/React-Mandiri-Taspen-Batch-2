import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function TodoFormFunctional(props) {
    const [todoDescription, setTodoDescription] = useState("");
    const [todoDeadline, setTodoDeadline] = useState("");

    useEffect(() => {
        if (props.todoToEdit !== null) {
            setTodoDescription(props.todoToEdit.description);
            setTodoDeadline(props.todoToEdit.deadline);
        }
        else {
            setTodoDescription("");
            setTodoDeadline("");
        }
    }, [props]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // let todoDescription = e.target.inputTodoDescription.value;
        // let todoDeadline = e.target.inputTodoDeadline.value;

        if (props.modalActionMode === "ADD") {
            props.saveNewTodo(todoDescription, todoDeadline);   
        }
        else if (props.modalActionMode === "EDIT") {
            props.saveEditedTodo(todoDescription, todoDeadline);
        }

        props.handleCloseModal();
    }

    const handleDescriptionChange = (e) => {
        let input = e.target.value;
        setTodoDescription(input);
    }

    const handleDeadlineChange = (e) => {
        let input = e.target.value;
        setTodoDeadline(input);
    }

    return (
        <Modal show={props.show} onHide={props.handleCloseModal}>
            <Form onSubmit={handleFormSubmit}>
                <Modal.Header closeButton>
                    {
                        props.modalActionMode === "ADD" ? (
                            <Modal.Title>Add New Todo</Modal.Title>
                        ) : (
                            <Modal.Title>Edit Todo</Modal.Title>
                        )
                    }
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>What do you want to do?</Form.Label>
                        <Form.Control type="text" name="inputTodoDescription" placeholder="e.g., play with children" value={todoDescription} onInput={handleDescriptionChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" name="inputTodoDeadline" value={todoDeadline} onChange={handleDeadlineChange}></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleCloseModal} variant="secondary">
                        Close
                    </Button>
                    <Button type="submit" variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default TodoFormFunctional;