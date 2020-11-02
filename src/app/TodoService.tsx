import axios from 'axios';
import { ITodoItem, ITodoList } from './actions/TodoTypes';

const api = axios.create({
    baseURL: 'http://localhost:3001/items'
})


class TodoService {

    static getTodos = function (): Promise<ITodoList> {
        return api.get('/').then(response => response.data);
    }

    static addTodo = (title: string, description: string, completed: boolean) => {
        api.post('/', {
            title: title,
            description: description,
            completed: completed
        })
    }
    static editTodo = (title: string, description: string, id: number, completed: boolean) => {
        api.put('/' + id, {
            title: title,
            description: description,
            completed: completed
        })
    }

    static deleteTodo = (id: number) => {
        api.delete('/' + id)
    }

    static getTodo = function (id: number): Promise<ITodoItem> {
        return api.get('/' + id).then(response => response.data);
    }

}
export default TodoService;
