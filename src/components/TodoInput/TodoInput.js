import React from 'react';
import PropTypes from 'prop-types';

import Input from './TodoInput.style';

const TodoInput = ({ todoAdd }) => {
	const handleEnterPress = (e) => {
		if (e.charCode === 13) {
			todoAdd(e.target.value);

			e.target.value = '';
		}
	};

	return (
		<Input type="text" onKeyPress={handleEnterPress} placeholder="What needs to be done?" />
	);
};

TodoInput.propTypes = {
	todoAdd: PropTypes.func
};

export default TodoInput;
