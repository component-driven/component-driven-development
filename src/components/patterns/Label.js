import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../';

function Label({ children, htmlFor, required = false }) {
	return (
		<Text as="label" aria-required={required} htmlFor={htmlFor}>
			{children}
			{required && (
				<Text as="sup" color="accent" ml={1} fontSize="xs">
					*
				</Text>
			)}
		</Text>
	);
}

Label.propTypes = {
	/** Whether the label should be marked as required */
	required: PropTypes.bool,
	htmlFor: PropTypes.string,
	children: PropTypes.node,
};

export default Label;
