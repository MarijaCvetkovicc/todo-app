import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';

const RootReducer = combineReducers({
    todos: todoReducer
});
export default RootReducer;