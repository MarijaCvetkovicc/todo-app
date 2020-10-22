import React from 'react';
import { ITodoList as list } from '../../TodoService';
import TodoListItem from '../TodoListItem/TodoListItem';
import { IDeleteTodoTask } from '../../TodoService';


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
                            return <TodoListItem deleteTodoTask={props.deleteTodoTask} item={item} key={id} />
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default TodoList;
