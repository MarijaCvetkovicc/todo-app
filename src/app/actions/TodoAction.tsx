import { Dispatch } from 'redux';
import { TodoDispatchTypes, ADD_TODO, DELETE_TODO, GET_TODOS } from '../actions/TodoTypes';
import TodoService from '../TodoService';


export const GetTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    TodoService.getTodos().then((res) => {
        dispatch({
            type: GET_TODOS,
            payload: res.todoItems
        })
    });

};
