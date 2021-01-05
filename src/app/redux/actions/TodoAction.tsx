import { Dispatch } from 'redux';
import { TodoDispatchTypes, GET_TODOS, DELETE_TODO, ADD_TODO, ITodoItem, EDIT_TODO, GET_TODO } from './TodoTypes';
import TodoService from '../../TodoService';
import { ITask } from '../../components/TodoApp/TodoForm';

export const GetTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    TodoService.getTodos().then((res) => {
        dispatch({
            type: GET_TODOS,
            payload: res
        })
    });
};
export const GetTodo = (id: number) => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    TodoService.getTodo(id).then((res) => {
        dispatch({
            type: GET_TODO,
            payload: res
        })
    });
};
export const deleteTodo = (id: number) => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    await TodoService.deleteTodo(id).then((res) => {
        dispatch({ type: DELETE_TODO, payload: res });
    });
}
export const addTodo = (task: ITask) => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    await TodoService.addTodo(task).then((res) => {
        dispatch({ type: ADD_TODO, payload: res.status });
    });
}
export const editTodo = (task: ITodoItem) => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    await TodoService.editTodo(task).then((res) => {
        dispatch({ type: EDIT_TODO, payload: res.status });
    });
}
