import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class TodoTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table striped bordered hover>
                <tbody>
                    {
                        this.props.todos.map((todo, index) => {
                            return (
                                <tr>
                                    <td>
                                        <Form.Check type="checkbox" onClick={(e) => {this.props.markTodoAsDone(index)}}/>
                                    </td>
                                    {
                                        todo.isDone ? (
                                            <td><s>{todo.description}</s></td>
                                        ) : (
                                            <td>{todo.description}</td>
                                        )
                                    }
                                    <td>
                                        {
                                            todo.isDone ? (
                                                null
                                            ) : (
                                                <Button variant="secondary">Edit</Button>
                                            )
                                        }
                                        <Button variant="danger" onClick={(e) => {this.props.deleteTodo(index);}} >Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td colSpan={3}>
                            <Button variant="primary" onClick={this.props.handleBtnAddTodoClick}>Add New</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default TodoTable;