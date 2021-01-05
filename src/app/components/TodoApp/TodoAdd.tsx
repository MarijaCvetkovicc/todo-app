import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TodoAddForm, { ITask } from './TodoForm';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { addTodo } from '../../redux/actions/TodoAction';
import { connect } from 'react-redux';
import { RootStore } from '../../redux/Store';
import { Alert } from '@material-ui/lab';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import moment from 'moment';

interface TodoAddProps extends RouteComponentProps<{}> {
    addTask(task: ITask): any,
    message: any,
}
interface TodoAppState {
    status: boolean,
    item: ITodoItem
}

class TodoAdd extends React.Component<TodoAddProps, TodoAppState>{

    constructor(props: TodoAddProps) {
        super(props);
        this.state = {
            status: true,
            item: {
                id: -1,
                title: '',
                description: '',
                completed: false,
                priority: 'Low',
                fromDate: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
                toDate: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
            }
        }
    }

    componentDidMount() { }
    addTodoTask = async (task: ITask) => {
        if (task.title.length > 0) {
            await this.props.addTask(task);
            if (this.props.message === 201) {
                this.props.history.push('/todos');
            }
            else {
                this.setState({ status: false });
            }
        }

    }

    renderAlert() {
        return (
            <Grid item container spacing={1} direction="column">
                <Grid item xs={12}>
                    <Box mx="auto">
                        <Alert severity="error">There is a problem with creating task! Please try again later.</Alert>
                    </Box>
                </Grid>
            </Grid>
        );
    }

    renderForm() {
        return (
            <div>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Add New Task
            </Typography>
                </Container>
                <TodoAddForm saveTodoTask={this.addTodoTask.bind(this)} item={this.state.item} />
            </div>
        );
    }
    render() {
        return (
            <Fragment>
                {this.state.status === true ? this.renderForm() : this.renderAlert()}
            </Fragment>
        );
    }

}
const mapStateToProps = (state: RootStore) => {
    return {
        message: state.todos.message,
    };
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addTask: (task: ITask) => dispatch(addTodo(task))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);