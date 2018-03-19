import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const Label = ({ children, ...props }) => {
	return (
		<Text is="label" {...props}>
			{children}
		</Text>
	);
};

Label.propTypes = {
	children: PropTypes.node,
};

export default Label;
