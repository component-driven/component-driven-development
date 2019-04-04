import React from 'react';
import PropTypes from 'prop-types';

/**
 * One button to push them all.
 */
const Button = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

Button.propTypes = {
	/** Button label */
	children: PropTypes.node,
};

export default Button;
