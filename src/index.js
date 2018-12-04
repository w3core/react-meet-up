import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { rootId } from '../config';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import DeepLink from './Pages/DeepLink/DeepLink';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './theme/theme.scss';

render(
	<Router>
		<div>
			<Link to="/">Home</Link> <Link to="/about/">About</Link><br /><br />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" exact component={Login} />
				<Route path="/deeplink" exact component={DeepLink} />
				<PrivateRoute isLoggedIn path="/about" component={About} />
			</Switch>
		</div>
	</Router>,
	document.getElementById(rootId),
);
