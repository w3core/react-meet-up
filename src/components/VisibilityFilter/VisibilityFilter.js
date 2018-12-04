import React from 'react';
import PropTypes from 'prop-types';

import VisibilityFilterWrapper, { Button } from './VisibilityFilter.style';

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
		<VisibilityFilterWrapper>
			{filters.map((presetFilter) => {
				const isFilterActive = isActive(visibilityFilter, presetFilter);

				return (
					<Button key={presetFilter} type="button" onClick={setFilter(presetFilter)} active={isFilterActive}>
						{userFriendlyFilterNames[presetFilter]}
					</Button>
				);
			})}
		</VisibilityFilterWrapper>
	);
};

VisibilityFilter.propTypes = {
	visibilityFilter: PropTypes.string,
	visibilityFilterSet: PropTypes.func
};

export default VisibilityFilter;
