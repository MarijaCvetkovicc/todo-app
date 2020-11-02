import React from 'react';
import { ITodoItem } from '../../actions/TodoTypes';
import { IDeleteTodoTask } from '../../TodoApp/TodoApp';
import { Link } from 'react-router-dom';

interface TodoListItemProps {
    deleteTodoTask: IDeleteTodoTask;
    item: ITodoItem;
}

function TodoListItem(props: TodoListItemProps) {

    return (
        <tr>
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>{(props.item.completed === true) ? 'Completed' : 'Not Completed'}</td>
            <td><button className="btn btn-sm btn-outline-warning "
            ><Link to={`/todos/${props.item.id}`}>Edit</Link></button></td>
            <td><button className="btn btn-sm btn-outline-danger "
                onClick={() => props.deleteTodoTask(props.item.id)}>Delete</button></td>
        </tr>

    );
}

export default TodoListItem;

