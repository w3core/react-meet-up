import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_CHANGE_BY } from '../actions/counter';

export default function counterReducer(state = 0, { type, ...action }) {
	const { amount, operation } = action;

	switch (type) {
		case COUNTER_INCREMENT: {
			const incrementedCounterValue = state + 1;
			return incrementedCounterValue;
		}
		case COUNTER_DECREMENT: {
			const decrementedCounterValue = state - 1;
			return decrementedCounterValue;
		}
		case COUNTER_CHANGE_BY: {
			let changedCounterValue = state;

			switch (operation) {
				case '+':
					changedCounterValue += amount;
					break;
				case '-':
					changedCounterValue -= amount;
					break;
				default:
					return state;
			}

			return changedCounterValue;
		}
		default:
			return state;
	}
}
