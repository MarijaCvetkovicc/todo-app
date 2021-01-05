export const GET_TODOS = 'GET_TODOS';
export const GET_TODO = 'GET_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface ITodoItem {
    id: number,
    title: string,
    description: string,
    priority: string,
    completed: boolean,
    fromDate: string,
    toDate: string,
}

export type ITodoList = ITodoItem[];
export interface IDefaultState {
    todos: ITodoList,
    message: any,
    item: ITodoItem
}
export interface GetTodos {
    type: typeof GET_TODOS
    payload: ITodoList
}
export interface GetTodo {
    type: typeof GET_TODO
    payload: ITodoItem
}
export interface AddTodos {
    type: typeof ADD_TODO
    payload: any
}
export interface EditTodos {
    type: typeof EDIT_TODO
    payload: any
}
export interface DeleteTodos {
    type: typeof DELETE_TODO
    payload: ITodoList

}
export type TodoDispatchTypes = GetTodos | AddTodos | DeleteTodos | GetTodo | EditTodos;