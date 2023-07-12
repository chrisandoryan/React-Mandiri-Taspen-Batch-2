import React from 'react';
import Header from '../components/Header';
import TodoTable from '../components/TodoTable';
import TodoForm from '../components/TodoForm';
import TodoFormFunctional from '../components/TodoForm.functional';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddTodoModal: false,
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
            showAddTodoModal: true
        });
    }

    handleCloseModal = () => {
        this.setState({
            showAddTodoModal: false
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
                <div className='todolist-section'>
                    <TodoTable todos={this.state.todos} handleBtnAddTodoClick={this.handleBtnAddTodoClick}
                    markTodoAsDone={this.markTodoAsDone}
                    deleteTodo={this.deleteTodo} />
                </div>
                <TodoFormFunctional 
                    show={this.state.showAddTodoModal}
                    saveNewTodo={this.saveNewTodo}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}

export default Homepage;