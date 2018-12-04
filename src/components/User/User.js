import React from 'react';
import PropTypes from 'prop-types';

import users from '../../__mock__/users.json';

const getUser = userId => users.find(user => user.id === userId);

const User = ({ match }) => {
	const user = getUser(match.params.userId);

	return (
		<div>
			<h2>{user.name} {user.lastName}</h2>
			Age: {user.age} <br />
			E-mail: {user.email} <br />
		</div>
	);
};

User.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			userId: PropTypes.string
		}).isRequired
	}).isRequired
};

export default User;
