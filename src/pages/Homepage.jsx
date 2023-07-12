import React from 'react';
import Header from '../components/Header';
import TodoTable from '../components/TodoTable';
import TodoForm from '../components/TodoForm';

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

    render() {
        return (
            <div>
                <div className='header-section'>
                    <Header />
                </div>
                <div className='todolist-section'>
                    <TodoTable todos={this.state.todos} handleBtnAddTodoClick={this.handleBtnAddTodoClick} />
                </div>
                <TodoForm 
                    show={this.state.showAddTodoModal}
                    saveNewTodo={this.saveNewTodo}
                />
            </div>
        )
    }
}

export default Homepage;