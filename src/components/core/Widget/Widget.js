import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import Text from '../Text';

/**
 * A container for a form control with a label.
 */
const Widget = ({ label, children }) => {
	return (
		<Text as="label">
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
