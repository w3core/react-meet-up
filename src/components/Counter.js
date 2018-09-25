import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value, increment, decrement }) => (
	<div>
		<h1>{value}</h1>
		<button type="button" onClick={increment}>+</button>
		<button type="button" onClick={decrement}>-</button>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number,
	increment: PropTypes.func,
	decrement: PropTypes.func
};

export default Counter;
