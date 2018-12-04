import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

const ADD_TO_CART = 'addtocart';

const DeepLink = ({ location }) => {
	const { action, items } = queryString.parse(location.search);

	switch (action) {
		case ADD_TO_CART:
			items.split(',').forEach((itemId) => {
				console.log(`Add ${itemId} to cart`);
			});
			break;

		default:
			break;
	}

	return <Redirect to="/" />;
};

DeepLink.propTypes = {
	location: PropTypes.shape({
		search: PropTypes.string
	}).isRequired
};

export default DeepLink;
