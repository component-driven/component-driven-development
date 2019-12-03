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

Feature.Icon = ({ children }) => (
	<Box mx="auto" color="secondary">
		{children}
	</Box>
);

Feature.Heading = ({ children }) => (
	<Heading as="h3" size="md" textAlign="center">
		{children}
	</Heading>
);

Feature.Body = ({ children }) => <Text textAlign="center">{children}</Text>;

Feature.propTypes = {
	as: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Feature;
