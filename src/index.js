import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { rootId } from '../config';

import Home from './Pages/Home/Home';

render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById(rootId),
);
