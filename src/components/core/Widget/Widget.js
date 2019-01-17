import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import Text from '../Text';

/**
 * A container for a form control with a label.
 */
const Widget = ({ label, children, ...props }) => {
	return (
		<Box {...props}>
			<Text as="label">
				<Box mb={2}>{label}</Box>
				{children}
			</Text>
		</Box>
	);
};

Widget.propTypes = {
	label: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
};

export default Widget;
