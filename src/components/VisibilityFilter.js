import React from 'react';
import PropTypes from 'prop-types';

const VisibilityFilter = ({ visibilityFilter, visibilityFilterSet }) => {
	const filters = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'];
	const userFriendlyFilterNames = {
		SHOW_ALL: 'All',
		SHOW_ACTIVE: 'Active',
		SHOW_COMPLETED: 'Completed'
	};

	const setFilter = filter => () => visibilityFilterSet(filter);

	const isActive = (filter, value) => {
		if (filter === value) {
			return '+';
		}

		return '';
	};

	return (
		<div>
			{filters.map(presetFilter => (
				<button key={presetFilter} type="button" onClick={setFilter(presetFilter)}>
					{isActive(visibilityFilter, presetFilter)}
					{userFriendlyFilterNames[presetFilter]}
				</button>
			))}
		</div>
	);
};

VisibilityFilter.propTypes = {
	visibilityFilter: PropTypes.string,
	visibilityFilterSet: PropTypes.func
};

export default VisibilityFilter;
