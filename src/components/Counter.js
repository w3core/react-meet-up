import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => (
	<div>
		<h1>{value}</h1>
		<button type="button">+</button>
		<button type="button">-</button>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number
};

export default Counter;
