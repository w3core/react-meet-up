import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import User from '../../components/User';

import users from '../../__mock__/users.json';

const About = ({ match }) => (
	<div>
		This is About page<br /><br />

		Users:<br />
		{users.map(user => (
			<div key={user.id}>
				<Link to={`${match.path}/${user.id}`}>{user.name}</Link>
			</div>
		))}

		<Route path={`${match.path}/:userId`} component={User} />
	</div>
);

About.propTypes = {
	match: PropTypes.shape({
		path: PropTypes.string
	}).isRequired
};

export default About;
