import {combineReducers} from 'redux';
import todoReducer from './TodoReducer';

const RootReducer = combineReducers({
    todos: todoReducer //kljuc po kom ce da se pojavljuje
});
export default RootReducer;