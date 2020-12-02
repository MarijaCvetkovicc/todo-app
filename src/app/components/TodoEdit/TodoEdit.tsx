import React from 'react';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import { RouteComponentProps } from 'react-router-dom';
import TodoService from '../../TodoService';
import TodoEditForm from './TodoEditForm';

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
                completed: false
            }
        }
    }

    componentDidMount() {
        TodoService.getTodo(this.state.item.id).then((res) => {
            this.setState({
                item:
                {
                    id: res.id,
                    title: res.title,
                    description: res.description,
                    completed: res.completed
                }
            })
        })
    }

    editTodoTask = async (title: string, description: string, id: number, completed: boolean) => {
        if (title.length > 0) {
          await  TodoService.editTodo(title, description, id, completed);
        }
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid py-2">
                    <div className="container">
                        <h1 className="display-4">Edit List of Todos</h1>
                    </div>
                </div>
                <TodoEditForm editTodoTask={this.editTodoTask.bind(this)} item={this.state.item} />
            </div>
        );
    }
}
export default TodoEdit;
