import React from 'react';
import PropTypes from 'prop-types';

import './Information.scss';

const Information = ({ todosLeft, todoClearCompleted, showClearCompleted }) => (
	<div className="Information">
		<span>{todosLeft} items left</span>
		{showClearCompleted && <button type="button" onClick={todoClearCompleted}>Clear completed</button>}
	</div>
);

Information.propTypes = {
	todosLeft: PropTypes.number,
	todoClearCompleted: PropTypes.func,
	showClearCompleted: PropTypes.bool
};


export default Information;
