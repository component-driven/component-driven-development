import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../components';

const Label = ({ children, htmlFor, required = false }) => {
	return <label htmlFor={htmlFor}>{children}</label>;
};

Label.propTypes = {
	/** Whether the label should be marked as required */
	required: PropTypes.bool,
	htmlFor: PropTypes.string,
	children: PropTypes.node,
};

export default Label;
