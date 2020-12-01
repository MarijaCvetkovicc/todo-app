import React, { Component, Fragment } from 'react';
import TodoList from '../components/TodoList/TodoList';
import TodoAdd from '../components/TodoAdd/TodoAdd';
import { ITodoList } from '../redux/actions/TodoTypes';
import TodoService from '../TodoService';
import { RootStore } from '../redux/Store';
import { GetTodos,deleteTodo } from '../redux/actions/TodoAction';
import { connect } from 'react-redux';

interface Props {
    todos: ITodoList,
    getAllTodos(): any
    deleteTodo(id:number):any
}

interface ITodoAppState {
    loading: boolean,
}

export type IDeleteTodoTask = (id: number) => void;

export function deleteTodoTask(arr: ITodoList, index: number) {
    let taskArray = arr;
    taskArray.splice(index, 1);
    return taskArray;
}

class TodoApp extends Component<Props, ITodoAppState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    componentDidMount() {
        this.setState({ loading: true });

        this.props.getAllTodos().then(() => {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        });
    }

    deleteTodoTask = async (id: number) => {
        this.setState({ loading: true });
        await TodoService.deleteTodo(id);
        this.props.getAllTodos().then(() => {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1000);
        });
    }

    addTodoTask = (title: string, description: string, completed: boolean) => {
        if (title.length > 0) {
            TodoService.addTodo(title, description, completed);
        }
        this.componentDidMount();
    }

    renderLoader() {
        return (
            <div>
                <img className="rounded mx-auto d-block" src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47geg4hp8wdcsr7qohp3ojopsvwkuzu5pyjgsr8yf6&rid=giphy.gif" alt="Loading..." />
            </div>
        );
    }

    renderForm() {
        return (
            <Fragment>
                <TodoAdd addTodoTask={this.addTodoTask.bind(this)} />
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
const mapStateToProps = (state: RootStore) => {
    return {
        todos: state.todos.todos
    };
};

const mapDispatchToProps = (dispatch: any,ownProps:number) => {
    return {
        getAllTodos: () => dispatch(GetTodos()),
        deleteTodo:()=>dispatch(deleteTodo(ownProps)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
