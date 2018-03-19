import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import Text from './Text';

const Widget = ({ label, children }) => {
	return (
		<Text is="label">
			<Box mb={2}>{label}</Box>
			{children}
		</Text>
	);
};

Widget.propTypes = {
	label: PropTypes.node,
	children: PropTypes.node,
};

export default Widget;
