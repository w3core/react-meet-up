import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, ...props }) => {
	if (isLoggedIn) {
		return <Route {...props} />;
	}

	return <Redirect to="/login" />;
};

export default PrivateRoute;
