import React from 'react';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import { IDeleteTodoTask } from '../TodoApp/TodoApp';
import { Link } from 'react-router-dom';

interface TodoListItemProps {
    deleteTodoTask: IDeleteTodoTask;
    item: ITodoItem;
}

function TodoListItem(props: TodoListItemProps) {

    return (
        <tr>
            <td>{(props.item.completed === true) ? <del>{props.item.title}</del> : <p>{props.item.title}</p>}</td>
            <td>
                <div className="col-8 text-truncate">
                    {(props.item.completed === true) ? <del>{props.item.description}</del> : props.item.description}
                </div>
            </td>
            <td>{(props.item.completed === true) ? 'Completed' : 'Not Completed'}</td>
            <td>
                <Link to={`/todos/${props.item.id}`}>
                    <button className="btn btn-sm btn-outline-warning ">
                        Edit
                    </button>
                </Link>
            </td>
            <td>
                <button className="btn btn-sm btn-outline-danger " onClick={() => props.deleteTodoTask(props.item.id)}>
                    Delete
                </button>
            </td>
            <td>
                {props.item.create}
            </td>
        </tr>
    );
}

export default TodoListItem;
