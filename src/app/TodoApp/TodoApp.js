import React, { Component } from 'react';
import TodoList from '../components/TodoList/TodoList.js';


class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        }
    }

    deleteTodoTask = (event, index) => {
        var taskArray = [...this.state.todoList];
        taskArray.splice(index, 1);
        this.setState({ todoList: taskArray });
    }

    AddTodoTask = (event) => {
        var taskDesc = event.target.elements.todoTask.value;
        if (taskDesc.length > 0) {
            this.setState({
                todoList: [...this.state.todoList, taskDesc]
            });
            event.target.reset();

        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid py-2">
                    <div className="container">
                        <h1 className="display-4">List of Todos</h1>
                    </div>
                </div>
                <form className="mb-3" onSubmit={this.AddTodoTask}>
                    <div className="input-group">
                        <input type="text" name="todoTask" className="form-control" placeholder="Enter text here..." autoComplete="off" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-outline-success">Add</button>
                        </div>
                    </div>
                </form>

                <TodoList deleteTodoTask={this.deleteTodoTask.bind(this)} todoList={this.state.todoList} />

            </div>
        );
    }
}
export default TodoApp;
