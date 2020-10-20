import React, { useState } from 'react';
import { ITodoList as list} from '../../TodoApp/TodoApp';
import TodoListItem from '../TodoListItem/TodoListItem';
import {IDeleteTodoTask} from '../../TodoApp/TodoApp';

interface TodoListProps {
    deleteTodoTask: IDeleteTodoTask;
    todoList: list;
}



function TodoList(props: TodoListProps) {
    return (
        <div>
            <ul className="list-group">
                {
                    props.todoList.map(
                        (item, id) => {
                            console.log(id);
                            return <TodoListItem deleteTodoTask={props.deleteTodoTask} item={item} key={id} />
                        }
                    )
                    
                    
                }
            </ul>
        </div>
    );
}

export default TodoList;
