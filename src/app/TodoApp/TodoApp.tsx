import React, { Component, Fragment } from 'react';
import TodoList from '../components/TodoList/TodoList';
import { ITodoList } from '../actions/TodoTypes';
import TodoService from '../TodoService';
import { RootStore } from '../Store';
import { useSelector } from 'react-redux';
import { GetTodos } from '../actions/TodoAction';
import { connect, useDispatch } from 'react-redux';


interface Props { }

interface ITodoAppState {
    //todoList: ITodoList;
    loading: boolean;
}


export function deleteTodoTask(arr: ITodoList, index: number) {
    let taskArray = arr;
    taskArray.splice(index, 1);
    return taskArray;
}

class TodoApp extends Component<Props, ITodoAppState> {
    constructor(props: Props) {
        super(props);
        this.state = {
           // todoList: [],
            loading: false,
        }
        
    }
    

    deleteTodoTask = (id: number) => {
        TodoService.deleteTodo(id);
        //this.componentDidMount();
    }

    addTodoTask = (event: any) => {
        var taskDesc = event.target.elements.todoTask.value;
        if (taskDesc.length > 0) {
            TodoService.addTodo(taskDesc);
            event.target.reset();
        } else {
            event.preventDefault();
        }
    }

    renderLoader() {
        return (
            <div>
                <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47geg4hp8wdcsr7qohp3ojopsvwkuzu5pyjgsr8yf6&rid=giphy.gif" alt="Loading..." />
            </div>
        );
    }

    renderForm() {
        //const todosState = useSelector((state:RootStore) => state.todos);

        return (
            <Fragment>
                <form className="mb-3" onSubmit={this.addTodoTask}>
                    <div className="input-group">
                        <input type="text" name="todoTask" className="form-control" placeholder="Enter text here..." autoComplete="off" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-outline-success">Add</button>
                        </div>
                    </div>
                </form>
                <TodoList deleteTodoTask={this.deleteTodoTask.bind(this)} todoList={this.props.todos} />
            </Fragment>
        );
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid py-2">
                    <div className="container">
                        <h1 className="display-4">List of Todos</h1>
                    </div>
                </div>
                {this.state.loading ? this.renderLoader() : this.renderForm()}

            </div>
        );
    }
}
const mapStateToProps = (state: RootStore) => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, { GetTodos })(TodoApp);
//export default TodoApp;
