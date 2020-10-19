import React, { Component } from 'react';
import TodoList from '../components/TodoList/TodoList';

export interface ITodoItem {
    // fill
    text: string;
}


export type ITodoList = ITodoItem[];

export type IDeleteTodoTask = (event:any,index: number) => void;

export function deleteTodoTask(arr:ITodoList,index:number){
    let taskArray = arr;
    taskArray.splice(index, 1);
    return taskArray;
}

interface Props{}

interface ITodoAppState {
    todoList: ITodoList;
}

class TodoApp extends Component<Props, ITodoAppState> {
    constructor(props:Props) {
        super(props);
        this.state = {
            todoList: []
        }
    }

    deleteTodoTask = (event:any, index:number) => {
        let taskArray = [...this.state.todoList];
        taskArray.splice(index, 1);
        this.setState({ todoList: taskArray });
    }

    addTodoTask = (event:any) => {
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
