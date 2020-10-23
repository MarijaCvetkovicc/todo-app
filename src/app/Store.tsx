import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

const middleware = [thunk];
const Store = createStore(
    RootReducer,
    applyMiddleware(...middleware));
export type RootStore = ReturnType<typeof RootReducer>;
export default Store;