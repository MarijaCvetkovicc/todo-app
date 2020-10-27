import axios from 'axios';
import { ITodoList } from './actions/TodoTypes';

const api = axios.create({
    baseURL: 'http://localhost:3001/items'
})

export type IDeleteTodoTask = (id: number) => void;

class TodoService {

    static getTodos = function (): Promise<ITodoList> {
        return api.get('/').then(response => response.data);
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
