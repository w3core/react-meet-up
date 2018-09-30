import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import localStorageMiddleware from '../middleware/localStorageMiddleware';

import todosReducer from '../reducers/todos';
import visibilityFilterReducer from '../reducers/visibilityFilter';

const rootReducer = combineReducers({
	todos: todosReducer,
	visibilityFilter: visibilityFilterReducer
});

const initialState = {
	todos: [],
	visibilityFilter: 'SHOW_ALL'
};


const getInitialState = () => {
	if (localStorage.getItem('todos')) {
		initialState.todos = JSON.parse(localStorage.getItem('todos'));
	}
	if (localStorage.getItem('visibilityFilter')) {
		initialState.visibilityFilter = JSON.parse(localStorage.getItem('visibilityFilter'));
	}

	return initialState;
};

const middleware = applyMiddleware(localStorageMiddleware);

export default createStore(rootReducer, getInitialState(), compose(
	middleware,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
