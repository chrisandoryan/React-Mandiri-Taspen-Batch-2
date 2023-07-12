import React from 'react';
import Header from '../components/Header';
import TodoTable from '../components/TodoTable';
import TodoForm from '../components/TodoForm';
import TodoFormFunctional from '../components/TodoForm.functional';

import '../styles/homepage.css';
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormModal: false,
            todoToEdit: null,
            todoToEditIndex: -1,
            modalActionMode: "",
            todos: [
                {
                    description: "Main Kelomang",
                    deadline: "2023-11-01 14.55",
                    createdBy: "Ryan",
                    isDone: false
                },
                {
                    description: "Belajar Coding biar jadi Direktur",
                    deadline: "2023-11-02 15.25",
                    createdBy: "Ryan",
                    isDone: false
                }
            ]
        }
    }

    handleBtnAddTodoClick = () => {
        this.setState({
            showFormModal: true,
            modalActionMode: "ADD"
        });
    }

    handleCloseModal = () => {
        this.setState({
            showFormModal: false,
            todoToEdit: null,
            modalAction: "",
            todoToEditIndex: -1
        });
    }

    handleBtnEditClick = (index) => {
        let currTodos = [...this.state.todos];
        let todo = currTodos[index];
        console.log(todo);

        this.setState({
            todoToEdit: todo,
            todoToEditIndex: index,
            showFormModal: true,
            modalActionMode: "EDIT"
        });
    }

    saveEditedTodo = (todoDesc, todoDeadline) => {
        let currTodos = [...this.state.todos];
        let todo = currTodos[this.state.todoToEditIndex];
        todo.description = todoDesc;
        todo.deadline = todoDeadline;

        currTodos[this.state.todoToEditIndex] = todo;
        this.setState({
            todos: currTodos
        });
    }

    saveNewTodo = (todoDesc, todoDeadline) => {
        let newTodo = {
            description: todoDesc,
            deadline: todoDeadline,
            createdBy: "Ryan",
            isDone: false
        }
        let newTodoState = [...this.state.todos, newTodo];
        this.setState({
            todos: newTodoState
        });
    }

    deleteTodo = (index) => {
        let currTodos = [...this.state.todos];
        currTodos.splice(index, 1);
        this.setState({
            todos: currTodos
        });
    }

    markTodoAsDone = (index) => {
        let currTodos = [...this.state.todos];
        let todo = currTodos[index];
        todo.isDone = true;
        currTodos[index] = todo;

        this.setState({
            todos: currTodos
        });
    }

    render() {
        return (
            <div>
                <div className='header-section'>
                    <Header />
                </div>
                <div id='todolist-section'>
                    <TodoTable todos={this.state.todos} handleBtnAddTodoClick={this.handleBtnAddTodoClick}
                    handleBtnEditClick={this.handleBtnEditClick}
                    markTodoAsDone={this.markTodoAsDone}
                    deleteTodo={this.deleteTodo} />
                </div>
                <TodoFormFunctional 
                    show={this.state.showFormModal}
                    saveNewTodo={this.saveNewTodo}
                    saveEditedTodo={this.saveEditedTodo}
                    handleCloseModal={this.handleCloseModal}
                    todoToEdit={this.state.todoToEdit}
                    modalActionMode={this.state.modalActionMode}
                />
            </div>
        )
    }
}

export default Homepage;