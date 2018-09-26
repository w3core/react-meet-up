import { createStore, combineReducers } from 'redux';

import todoReducer from '../reducers/todos';

const rootReducer = combineReducers({
	todos: todoReducer
});

const initialState = {
	todos: []
};

export default createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
