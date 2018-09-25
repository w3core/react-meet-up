import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/counter';

export default function counterReducer(state = 0, { type }) {
	switch (type) {
		case COUNTER_INCREMENT: {
			const incrementedCounterValue = state + 1;
			return incrementedCounterValue;
		}
		case COUNTER_DECREMENT: {
			const decrementedCounterValue = state - 1;
			return decrementedCounterValue;
		}
		default:
			return state;
	}
}
