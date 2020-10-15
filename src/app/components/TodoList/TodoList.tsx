import React, { useState } from 'react';
import { TodoList as list} from '../../TodoApp/TodoApp';
import TodoListItem from '../TodoListItem/TodoListItem';
import DeleteTodoTask from '../../TodoApp/TodoApp';

interface TodoListProps {
    deleteTodoTask: DeleteTodoTask;
    todoList: list;
}



function TodoList(props: TodoListProps) {
    return (
        <div>
            <ul className="list-group">
                {
                    props.todoList.map(
                        (item, index) => {
                            return <TodoListItem deleteTodoTask={props.deleteTodoTask} item={item} index={index} />
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default TodoList;
