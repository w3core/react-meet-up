import { VISIBILITY_FILTER_SET } from '../actions/visibilityFilter';

export default function visibilityFilter(state = 'SHOW_ALL', { type, filter }) {
	if (type === VISIBILITY_FILTER_SET) {
		return filter;
	}

	return state;
}
