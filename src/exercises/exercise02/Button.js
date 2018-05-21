import React from 'react';
import PropTypes from 'prop-types';

/**
 * The most simple button.
 */
const Button = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

Button.propTypes = {
	/** Button text */
	children: PropTypes.node,
};

export default Button;
