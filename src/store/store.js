import { createStore, combineReducers } from 'redux';

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

export default createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
