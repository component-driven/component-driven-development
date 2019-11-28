import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../../primitives/Stack';
import Box from '../../primitives/Box';
import Heading from '../../primitives/Heading';
import Text from '../../primitives/Text';

const Feature = ({ as, children }) => (
	<Stack gridGap={2} as={as}>
		{children}
	</Stack>
);

// width={80}
Feature.Icon = ({ children }) => (
	<Box mx="auto" color="secondary">
		{children}
	</Box>
);

Feature.Heading = ({ children }) => (
	<Heading as="h3" size="md" align="center">
		{children}
	</Heading>
);

Feature.Body = ({ children }) => <Text align="center">{children}</Text>;

Feature.propTypes = {
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Feature;
