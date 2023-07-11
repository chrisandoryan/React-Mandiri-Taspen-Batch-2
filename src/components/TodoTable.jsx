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
                        this.props.todos.map((todo) => {
                            return (
                                <tr>
                                    <td>
                                        <Form.Check type="checkbox" />
                                    </td>
                                    <td>{todo.description}</td>
                                    <td>
                                        <Button variant="secondary">Edit</Button>
                                        <Button variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    <tr>
                        <td colSpan={3}>
                            <Button variant="primary">Add New</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default TodoTable;