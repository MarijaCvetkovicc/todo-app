import React from 'react';
import { ITodoItem } from '../../redux/actions/TodoTypes';
import { IDeleteTodoTask } from '../TodoApp/TodoApp';
import { Link } from 'react-router-dom';
import { Box, Button, TableCell, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

interface TodoListItemProps {
    deleteTodoTask: IDeleteTodoTask;
    item: ITodoItem;
}

function TodoListItem(props: TodoListItemProps) {

    return (
        <TableRow>
            <TableCell align="center">
                {(props.item.completed === true) ? <del>{props.item.title}</del> : props.item.title}
            </TableCell>
            <TableCell align="center">
                {(props.item.completed === true) ? <del>{props.item.description}</del> : props.item.description}
            </TableCell>

            <TableCell align="center">
                {(props.item.completed === true) ? 'Completed' : 'Not Completed'}
            </TableCell>
            <TableCell align="center">
                <Box display="flex" flexDirection="row">
                    <Box p={1} mx="auto" >
                        <Link to={`/todos/${props.item.id}`}>
                            <Button color="primary">
                                <EditIcon />
                            </Button>
                        </Link>
                    </Box>
                    <Box p={1} mx="auto" >
                        <Button color="secondary" onClick={() => props.deleteTodoTask(Number(props.item.id))}>
                            <DeleteForeverIcon />
                        </Button>
                    </Box>
                </Box>
            </TableCell>
        </TableRow>
    );
}

export default TodoListItem;
