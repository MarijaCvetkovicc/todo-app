import React from 'react';
import { ITodoList } from '../../redux/actions/TodoTypes';
import TodoListItem from '../TodoListItem/TodoListItem';
import { IDeleteTodoTask } from '../TodoApp/TodoApp';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
interface TodoListProps {
    deleteTodoTask: IDeleteTodoTask;
    todoList: ITodoList;
}

function TodoList(props: TodoListProps) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Is It Completed?</TableCell>
                        <TableCell align="center">Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.todoList.map(
                            (item, id) => {
                                return <TodoListItem deleteTodoTask={props.deleteTodoTask} item={item} key={id} />
                            }
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TodoList;
