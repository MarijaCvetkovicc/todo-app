export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface ITodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export type ITodoList = ITodoItem[];
export interface IDefaultState{
    todos:ITodoList
}
export interface GetTodos {
    type: typeof GET_TODOS
    payload: ITodoList
}
export interface AddTodos {
    type: typeof ADD_TODO
    payload: ITodoList

}
export interface DeleteTodos {
    type: typeof DELETE_TODO
    payload: ITodoList

}
export type TodoDispatchTypes = GetTodos | AddTodos | DeleteTodos;