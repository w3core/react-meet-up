import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { rootId } from '../config';
import store from './store';
import Home from './Pages/Home';

const reduxDevTools = (
	typeof window !== 'undefined'
	&& window.__REDUX_DEVTOOLS_EXTENSION__
	&& window.__REDUX_DEVTOOLS_EXTENSION__()
);
const $store = store(reduxDevTools);

render(
	<Provider store={$store}>
		<Home />
	</Provider>,
	document.getElementById(rootId),
);
