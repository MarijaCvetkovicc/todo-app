import { Dispatch } from 'redux';
import { TodoDispatchTypes, GET_TODOS, DELETE_TODO } from './TodoTypes';
import TodoService from '../../TodoService';

export const GetTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    TodoService.getTodos().then((res) => {
        dispatch({
            type: GET_TODOS,
            payload: res
        })
    });
};
export const deleteTodo = (id: number) => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    await TodoService.deleteTodo(id).then((res) => {
        dispatch({ type: DELETE_TODO, payload: res});
    });
}

