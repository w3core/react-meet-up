export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_CHANGE_BY = 'COUNTER_CHANGE_BY';

export const counterIncrement = () => ({
	type: COUNTER_INCREMENT
});

export const counterDecrement = () => ({
	type: COUNTER_DECREMENT
});

export const counterChangeBy = ({ operation, amount }) => ({
	type: COUNTER_CHANGE_BY,
	operation,
	amount
});
