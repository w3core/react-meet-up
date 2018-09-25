import React from 'react';
import { render } from 'react-dom';

import { rootId } from '../config';
import Home from './Pages/Home';

render(
	<Home />,
	document.getElementById(rootId),
);
