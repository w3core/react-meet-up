import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ todoAdd }) => {
	const handleEnterPress = (e) => {
		if (e.charCode === 13) {
			todoAdd(e.target.value);

			e.target.value = '';
		}
	};

	return (
		<input type="text" onKeyPress={handleEnterPress} />
	);
};

TodoInput.propTypes = {
	todoAdd: PropTypes.func
};

export default TodoInput;
