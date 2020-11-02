import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware = [thunk];
const Store = createStore(
    RootReducer, composeWithDevTools(
        applyMiddleware(...middleware),
    ));
export type RootStore = ReturnType<typeof RootReducer>;
export default Store;