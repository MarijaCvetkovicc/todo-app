import React, { Component } from 'react';
import { ITodoItem as item} from '../../TodoApp/TodoApp';
import { IDeleteTodoTask } from '../../TodoApp/TodoApp';

interface TodoListItemProps {
    deleteTodoTask: IDeleteTodoTask;
    item: item;
}



function TodoListItem (props: TodoListItemProps){
    
        return (
            <div>

                <li className="list-group-item" >
                    {props.item} 
                    <button className="btn btn-sm btn-outline-danger float-right" 
                    onClick={()=>props.deleteTodoTask}>X</button>
                </li>
                

            </div>
        );
    }

export default TodoListItem;

