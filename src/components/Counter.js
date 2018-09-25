import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value, increment, decrement, changeBy }) => {
	const incrementBy = amount => () => changeBy({
		operation: '+',
		amount
	});

	const decrentBy = amount => () => changeBy({
		operation: '-',
		amount
	});

	return (
		<div>
			<h1>{value}</h1>
			<button type="button" onClick={incrementBy(5)}>+5</button>
			<button type="button" onClick={increment}>+</button>
			<button type="button" onClick={decrement}>-</button>
			<button type="button" onClick={decrentBy(5)}>-5</button>
		</div>
	);
};

Counter.propTypes = {
	value: PropTypes.number,
	increment: PropTypes.func,
	decrement: PropTypes.func,
	changeBy: PropTypes.func
};

export default Counter;
