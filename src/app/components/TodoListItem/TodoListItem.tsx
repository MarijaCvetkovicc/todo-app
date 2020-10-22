import React from 'react';
import { ITodoItem as item } from '../../TodoService';
import { IDeleteTodoTask } from '../../TodoService';

interface TodoListItemProps {
    deleteTodoTask: IDeleteTodoTask;
    item: item;
}

function TodoListItem(props: TodoListItemProps) {

    return (
        <div>
            <li className="list-group-item" >
                {props.item.title}
                <button className="btn btn-sm btn-outline-danger float-right"
                    onClick={() => props.deleteTodoTask(props.item.id)}>X</button>
            </li>
        </div>
    );
}

export default TodoListItem;

