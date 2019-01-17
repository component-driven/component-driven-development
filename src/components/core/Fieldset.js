import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import Heading from './Heading';

const Container = styled(Box)`
	padding: 0;
	border: none;
`;

/**
 * A field set — a group of form fields with a heading.
 */
const Fieldset = ({ label, children, ...props }) => {
	return (
		<Container as="fieldset" {...props}>
			<Heading size="l" as="legend" mb={4}>
				{label} 
			</Heading>
			{children}
		</Container>
	);
};

Fieldset.propTypes = {
	label: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
};

export default Fieldset;
