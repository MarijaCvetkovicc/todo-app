import { TodoDispatchTypes, GET_TODOS, DELETE_TODO, ADD_TODO, EDIT_TODO, GET_TODO } from '../actions/TodoTypes';
import { IDefaultState } from '../actions/TodoTypes';
const defaultState: IDefaultState = {
    todos: [],
    message: '',
    item: {
        id: 0,
        title: '',
        description: '',
        priority: '',
        completed: false,
        toDate: '',
        fromDate: ''
    }
}

const todoReducer = (state: IDefaultState = defaultState, action: TodoDispatchTypes): IDefaultState => {
    switch (action.type) {
        case GET_TODO:
            return {
                todos: state.todos,
                message: state.message,
                item: action.payload
            };
        case GET_TODOS:
            return {
                todos: action.payload,
                message: state.message,
                item: state.item
            };
        case ADD_TODO:
            return {
                todos: state.todos,
                message: action.payload,
                item: state.item
            };
        case EDIT_TODO:
            return {
                todos: state.todos,
                message: action.payload,
                item: state.item
            };
        case DELETE_TODO:
            return {
                todos: action.payload,
                message: state.message,
                item: state.item
            };
        default:
            return state;
    }
};
export default todoReducer;
