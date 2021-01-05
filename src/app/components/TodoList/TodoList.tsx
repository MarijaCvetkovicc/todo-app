import React from 'react';
import { ITodoList } from '../../redux/actions/TodoTypes';
import TodoListItem from '../TodoListItem/TodoListItem';
import { IDeleteTodoTask } from '../TodoApp/TodoApp';


interface TodoListProps {
    deleteTodoTask: IDeleteTodoTask;
    todoList: ITodoList;
}

function TodoList(props: TodoListProps) {
    return (

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Is It Completed?</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Priority</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todoList.map(
                        (item, id) => {
                            return <TodoListItem deleteTodoTask={props.deleteTodoTask} item={item} key={id} />
                        }
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;
