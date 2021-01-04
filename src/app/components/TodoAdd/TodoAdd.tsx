import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TodoService from '../../TodoService';
import TodoAddForm from './TodoAddForm';
import { Container, Typography } from '@material-ui/core';

interface TodoAddProps extends RouteComponentProps<{}> {
}

class TodoAdd extends React.Component<TodoAddProps>{

    addTodoTask = (title: string, description: string, completed: boolean) => {
        if (title.length > 0) {
            TodoService.addTodo(title, description, completed);
        }
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Add New Task
            </Typography>
                </Container>
                <TodoAddForm addTodoTask={this.addTodoTask.bind(this)} />
            </div>
        );
    }
}
export default TodoAdd;