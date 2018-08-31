import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, children }) => (
	<button className="Button" onClick={ onClick }>{ children }</button>
);

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

Button.defaultProps = {
	onClick: e => console.log('Button clicked with default handler', e.target)
};

export default Button;
