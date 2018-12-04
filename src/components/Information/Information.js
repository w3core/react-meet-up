import React from 'react';
import PropTypes from 'prop-types';

import InformationWrapper, { Button } from './Information.style';

const Information = ({ todosLeft, todoClearCompleted, showClearCompleted }) => (
	<InformationWrapper>
		<span>{todosLeft} items left</span>
		{showClearCompleted && <Button type="button" onClick={todoClearCompleted}>Clear completed</Button>}
	</InformationWrapper>
);

Information.propTypes = {
	todosLeft: PropTypes.number,
	todoClearCompleted: PropTypes.func,
	showClearCompleted: PropTypes.bool
};


export default Information;
