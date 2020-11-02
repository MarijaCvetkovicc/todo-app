import { Dispatch } from 'redux';
import { TodoDispatchTypes, GET_TODOS } from '../actions/TodoTypes';
import TodoService from '../TodoService';

export const GetTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    TodoService.getTodos().then((res) => {
        dispatch({
            type: GET_TODOS,
            payload: res
        })
    });

};


