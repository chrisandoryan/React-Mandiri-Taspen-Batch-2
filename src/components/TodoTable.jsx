import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from '../styles/todotable.module.css';

class TodoTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table striped bordered hover className={styles['todo-table']}>
                <tbody>
                    {
                        this.props.todos.map((todo, index) => {
                            return (
                                <tr>
                                    <td className={styles['todo-checkbox']}>
                                        <Form.Check type="checkbox" onClick={(e) => {this.props.markTodoAsDone(index)}}/>
                                    </td>
                                    {
                                        todo.isDone ? (
                                            <td><s>{todo.description}</s></td>
                                        ) : (
                                            <td>{todo.description}</td>
                                        )
                                    }
                                    <td className={styles['action-cell']}>
                                        {
                                            todo.isDone ? (
                                                null
                                            ) : (
                                                <Button className={styles.btn} variant="secondary" onClick={(e) => {this.props.handleBtnEditClick(index)}}>Edit</Button>
                                            )
                                        }
                                        <Button className={styles.btn} variant="danger" onClick={(e) => {this.props.deleteTodo(index);}} >Delete</Button>
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