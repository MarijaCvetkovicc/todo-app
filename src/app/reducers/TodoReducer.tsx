import { TodoDispatchTypes, GET_TODOS } from '../actions/TodoTypes';
import { IDefaultState } from '../actions/TodoTypes';



const defaultState: IDefaultState = {
    todos: []
}

const todoReducer = (state: IDefaultState = defaultState, action: TodoDispatchTypes): IDefaultState => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
};
export default todoReducer;
