import { createStore, combineReducers } from 'redux';

import counterReducer from '../reducers/counter';

const rootReducer = combineReducers({
	counter: counterReducer
});

const initialState = {
	counter: 42
};

export default createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
