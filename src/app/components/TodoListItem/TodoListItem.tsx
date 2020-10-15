import React, { Component } from 'react';
import { TodoItem as item} from '../../TodoApp/TodoApp';
import DeleteTodoTask from '../../TodoApp/TodoApp';

interface TodoListItemProps {
    deleteTodoTask: DeleteTodoTask;
    item: item;
    index: number;
}



function TodoListItem (props: TodoListItemProps){
    
        return (
            <div>
                <li className="list-group-item" key={props.index}>
                    {props.item}
                    <button className="btn btn-sm btn-outline-danger float-right" 
                    onClick={()=>props.deleteTodoTask}>X</button>
                </li>
            </div>
        );
    }

export default TodoListItem;

