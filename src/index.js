import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { rootId } from '../config';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import './theme/theme.scss';

render(
	<Router>
		<div>
			<Link to="/">Home</Link> <Link to="/about/">About</Link><br /><br />

			<Route path="/" exact component={Home} />
			<Route path="/about" component={About} />
		</div>
	</Router>,
	document.getElementById(rootId),
);
