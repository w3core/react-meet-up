import React from 'react';
import PropTypes from 'prop-types';

import './VisibilityFilter.scss';

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
		<div className="VisibilityFilter">
			{filters.map((presetFilter) => {
				const isFilterActive = isActive(visibilityFilter, presetFilter);

				return (
					<button key={presetFilter} type="button" onClick={setFilter(presetFilter)} className={isFilterActive ? '-active' : ''}>
						{userFriendlyFilterNames[presetFilter]}
					</button>
				);
			})}
		</div>
	);
};

VisibilityFilter.propTypes = {
	visibilityFilter: PropTypes.string,
	visibilityFilterSet: PropTypes.func
};

export default VisibilityFilter;
