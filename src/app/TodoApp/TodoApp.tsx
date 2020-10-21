import React, { Component } from 'react';
import TodoList from '../components/TodoList/TodoList';
import axios from 'axios';
import { ITodoList } from '../TodoService';
import TodoService from '../TodoService';


interface Props { }

interface ITodoAppState {
    todoList: ITodoList;
}

const api = axios.create({
    baseURL: 'http://localhost:3001/items'
})

export function deleteTodoTask(arr: ITodoList, index: number) {
    let taskArray = arr;
    taskArray.splice(index, 1);
    return taskArray;
}



class TodoApp extends Component<Props, ITodoAppState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            todoList: []
        }

    }

    componentDidMount() {

        TodoService.getTodos().then((res) => {
            this.setState({ todoList: res.todoItems });

        });
    }

    deleteTodoTask = ( id: number) => {
        //let taskArray = [...this.state.todoList];
        TodoService.deleteTodo(id);
        //this.setState({ todoList: taskArray });
        this.componentDidMount();
    }

    addTodoTask = (event: any) => {
        var taskDesc = event.target.elements.todoTask.value;
        if (taskDesc.length > 0) {
            /*this.setState({
                 todoList: [...this.state.todoList, taskDesc]
             });*/
            TodoService.addTodo(taskDesc);
            /* api.post('/', {
                 title: taskDesc,
                 completed:false
               })
               .then(function (response) {
                 console.log(response);
               })*/
            event.target.reset();

        } else {
            event.preventDefault();
        }
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid py-2">
                    <div className="container">
                        <h1 className="display-4">List of Todos</h1>
                    </div>
                </div>
                <form className="mb-3" onSubmit={this.addTodoTask}>
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
