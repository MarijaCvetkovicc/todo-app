import React, { Component, Fragment } from 'react';
import TodoList from '../TodoList/TodoList';
import { ITodoList } from '../../redux/actions/TodoTypes';
import TodoService from '../../TodoService';
import { RootStore } from '../../redux/Store';
import { GetTodos, deleteTodo } from '../../redux/actions/TodoAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, Container, Grid, Typography } from '@material-ui/core';

interface Props {
    todos: ITodoList,
    getAllTodos(): any
    deleteTodo(id: number): any
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


    renderLoader() {
        return (
            <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                <Grid item xs={3}>
                    <CircularProgress />
                </Grid>
            </Grid>

        );
    }

    renderForm() {
        return (
            <Fragment>
                <Box p={1} mx="auto" >
                    <Link to={`/todos/create`}>
                        <Button variant="outlined" color="primary">
                            Create
                    </Button>
                    </Link>
                </Box>
                <TodoList deleteTodoTask={this.deleteTodoTask.bind(this)} todoList={this.props.todos} />
            </Fragment>
        );
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    List Of Tasks
            </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    I will help you remeber everything you need to do.
            </Typography>
                {this.state.loading ? this.renderLoader() : this.renderForm()}

            </Container>
        );
    }
}
const mapStateToProps = (state: RootStore) => {
    return {
        todos: state.todos.todos
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllTodos: () => dispatch(GetTodos()),
        deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
