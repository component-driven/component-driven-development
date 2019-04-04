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

// Tell Styleguidist that we're exporting a React component (to see PropTypes docs
// for styled-components)
/** @component */
export default Button;
