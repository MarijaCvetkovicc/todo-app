import axios from 'axios';
import { ITask } from './components/TodoApp/TodoForm';
import { ITodoItem, ITodoList } from './redux/actions/TodoTypes';

const api = axios.create({
    baseURL: 'http://localhost:3001/items'
})

class TodoService {

    static getTodos = function (): Promise<ITodoList> {
        return api.get('/').then(response => response.data);
    }

    static addTodo = (task: ITask) => {
        return api.post('/', {
            title: task.title,
            description: task.description,
            completed: task.completed,
            priority: task.priority,
            start: task.start,
            end: task.end,
            backgroundColor: task.backgroundColor
        });
    }
    static editTodo = (task: ITodoItem) => {
        return api.put('/' + task.id, {
            title: task.title,
            description: task.description,
            completed: task.completed,
            priority: task.priority,
            start: task.start,
            end: task.end,
            backgroundColor: task.backgroundColor
        })
    }

    static deleteTodo = async (id: number): Promise<ITodoList> => {
        await api.delete('/' + id);
        return api.get('/').then(response => response.data);
    }

    static getTodo = function (id: number): Promise<ITodoItem> {
        return api.get('/' + id).then(response => response.data);
    }

}
export default TodoService;
