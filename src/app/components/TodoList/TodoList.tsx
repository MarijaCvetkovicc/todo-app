import React from 'react';
import { ITodoList } from '../../actions/TodoTypes';
import TodoListItem from '../TodoListItem/TodoListItem';
import { IDeleteTodoTask } from '../../TodoService';


interface TodoListProps {
    deleteTodoTask: IDeleteTodoTask;
    todoList: ITodoList;
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
