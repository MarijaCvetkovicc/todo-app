import React, { Fragment } from 'react';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import TodoForm, { ITask } from './TodoForm';
import { RootStore } from '../../redux/Store';
import { connect } from 'react-redux';
import { editTodo, GetTodo } from '../../redux/actions/TodoAction';
import { Alert } from '@material-ui/lab';
import { setColor } from '../../util/helpers';

interface TodoEditProps extends RouteComponentProps<{ id: string }> {
    message: any,
    editTask(task: ITodoItem): any,
    getTask(id: number): any,
    item: ITodoItem,
}

interface TodoEditState {
    status: boolean,
    task: ITodoItem
}
class TodoEdit extends React.Component<TodoEditProps, TodoEditState>{
    constructor(props: TodoEditProps) {
        super(props);
        this.state = {
            status: true,
            task: {
                id: props.match.params.id,
                title: '',
                description: '',
                completed: false,
                priority: 'Low',
                start: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
                end: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
                backgroundColor: ''
            }
        }
    }

    componentDidMount() {
        this.props.getTask(Number(this.state.task.id));
    }

    editTodoTask = async (task: ITask) => {
        if (task.title.length > 0) {
            this.setState({
                task: {
                    id: this.state.task.id,
                    title: task.title,
                    description: task.description,
                    completed: task.completed,
                    priority: task.priority,
                    start: task.start,
                    end: task.end,
                    backgroundColor: setColor(task.priority)
                }
            });

            await this.props.editTask(this.state.task);
            console.log(this.props.message);
            if (this.props.message === 200) {
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
                        <Alert severity="error">There is a problem with editing task! Please try again later.</Alert>
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
                        Edit Task: {this.props.item.title}
                    </Typography>
                </Container>
                <TodoForm saveTodoTask={this.editTodoTask.bind(this)} item={this.props.item} />
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
        item: state.todos.item
    };
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        editTask: (task: ITodoItem) => dispatch(editTodo(task)),
        getTask: (id: number) => dispatch(GetTodo(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);
