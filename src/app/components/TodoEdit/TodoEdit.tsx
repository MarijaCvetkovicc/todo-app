import React from 'react';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import { RouteComponentProps } from 'react-router-dom';
import TodoService from '../../TodoService';
import TodoEditForm from './TodoEditForm';
import { Container, Typography } from '@material-ui/core';

interface TodoEditProps extends RouteComponentProps<{ id: string }> {
}

interface TodoEditState {
    item: ITodoItem,
}
class TodoEdit extends React.Component<TodoEditProps, TodoEditState>{
    constructor(props: TodoEditProps) {
        super(props);
        this.state = {
            item: {
                id: Number(props.match.params.id),
                title: '',
                description: '',
                completed: false,
                create:''
            }
        }
    }

    componentDidMount() {
        TodoService.getTodo(this.state.item.id).then((res) => {
            this.setState({
                item: {
                    id: res.id,
                    title: res.title,
                    description: res.description,
                    completed: res.completed,
                    create:res.create
                }
            })
        })
    }

    editTodoTask = async (title: string, description: string, id: number, completed: boolean) => {
        if (title.length > 0) {
            await TodoService.editTodo(title, description, id, completed);
        }
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
               <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Edit Task: {this.state.item.title}
            </Typography>
                </Container>
                <TodoEditForm editTodoTask={this.editTodoTask.bind(this)} item={this.state.item} />
            </div>
        );
    }
}
export default TodoEdit;
