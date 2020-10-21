import React, { Component } from 'react';
import axios from 'axios';
import { resolve } from 'path';


const api = axios.create({
    baseURL: 'http://localhost:3001/items'
})
export interface ITodoItem {
    // fill
    id: number;
    title: string;
    completed: boolean;
}

export type ITodoList = ITodoItem[];

export type IDeleteTodoTask = (id: number) => void;


class TodoService {


    static getTodos = function (): Promise<{ todoItems: ITodoList }> {
        return new Promise((resolve) => {

            api.get('/').then(
                response => {
                    console.log(response.data);
                    resolve({
                        todoItems: response.data
                    });
                }
            );


        })
    }

    static addTodo = (taskDesc: string) => {

        api.post('/', {
            title: taskDesc,
            completed: false
        }).then(function (response) {
            console.log(response);
        })

    }
   static deleteTodo = (id: number) => {

        api.delete('/' + id
        ).then(function (response) {
            console.log(response);
        })
    }
    getTodo = () => {

    }

}
export default TodoService;
