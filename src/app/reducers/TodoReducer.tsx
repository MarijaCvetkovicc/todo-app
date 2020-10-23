import { TodoDispatchTypes, ADD_TODO, DELETE_TODO, GET_TODOS } from '../actions/TodoTypes'; 
import {ITodoList} from '../actions/TodoTypes';


interface IDefaultState{
    todos:ITodoList
}
const defaultState:IDefaultState={
    todos:[]
}

const todoReducer = (state:IDefaultState=defaultState,action:TodoDispatchTypes):IDefaultState => {
    switch(action.type){
        case GET_TODOS:
            console.log('reducer');
            return {
                todos:action.payload
            };
        default:
            return state;
    }
};
export default todoReducer;
