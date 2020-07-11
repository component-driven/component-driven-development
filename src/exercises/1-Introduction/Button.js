import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button {...props} />;

Button.propTypes = {
	/** Button label */
	children: PropTypes.node,
};

// This will let react-styleguidist know that we're exporting a React component
// so it can generate the PropTypes table. This is only needed when used
// with styled-components and such.
/** @component */
export default Button;
