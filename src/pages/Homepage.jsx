import React from 'react';
import Header from '../components/Header';
import TodoTable from '../components/TodoTable';
import TodoForm from '../components/TodoForm';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    description: "Main Kelomang",
                    createdAt: "2023-11-01 14.55",
                    createdBy: "Ryan",
                    isDone: false
                },
                {
                    description: "Belajar Coding biar jadi Direktur",
                    createdAt: "2023-11-02 15.25",
                    createdBy: "Ryan",
                    isDone: false
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className='header-section'>
                    <Header />
                </div>
                <div className='todolist-section'>
                    <TodoTable todos={this.state.todos} />
                </div>
                <TodoForm />
            </div>
        )
    }
}

export default Homepage;