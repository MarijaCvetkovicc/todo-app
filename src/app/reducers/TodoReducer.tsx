import { TodoDispatchTypes, ADD_TODO, DELETE_TODO, GET_TODOS } from '../actions/TodoTypes'; 
import {ITodoList,IDefaultState} from '../actions/TodoTypes';



const defaultState:IDefaultState={
    todos:[]
}

const todoReducer = (state:IDefaultState=defaultState,action:TodoDispatchTypes):IDefaultState => {
    switch(action.type){
        case GET_TODOS:
            console.log('reducer');
            return {
                ...state,
                todos:action.payload
            };
        default:
            return state;
    }
};
export default todoReducer;
