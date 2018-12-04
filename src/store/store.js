import { createStore, compose, applyMiddleware } from 'redux';
import { Map, List, fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import localStorageMiddleware from '../middleware/localStorageMiddleware';

import todosReducer from '../reducers/todos';
import visibilityFilterReducer from '../reducers/visibilityFilter';

const rootReducer = combineReducers({
	todos: todosReducer,
	visibilityFilter: visibilityFilterReducer
});

const initialState = {
	todos: List(),
	visibilityFilter: 'SHOW_ALL'
};


const getInitialState = () => {
	if (localStorage.getItem('todos')) {
		initialState.todos = fromJS(JSON.parse(localStorage.getItem('todos'))).toList().map(todo => Map(todo));
	}
	if (localStorage.getItem('visibilityFilter')) {
		initialState.visibilityFilter = JSON.parse(localStorage.getItem('visibilityFilter'));
	}

	return Map(initialState);
};

const middleware = applyMiddleware(localStorageMiddleware);

export default createStore(rootReducer, getInitialState(), compose(
	middleware,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
