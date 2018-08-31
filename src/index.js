import React from 'react';
import ReactDOM from 'react-dom';
import { rootId } from '../config';

import Home from './Pages/Home';

const App = () => (
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);

const root = document.getElementById(rootId);

ReactDOM.render(<App />, root);
