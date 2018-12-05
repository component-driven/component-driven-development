import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import Stack from 'stack-styled';
import Heading from '../core/Heading';
import Text from '../core/Text';

const Feature = ({ as, imageComponent: Image, title, children }) => (
	<Stack gap={2} as={as}>
		<Box ml="auto" mr="auto" color="secondary">
			<Image width="80" />
		</Box>
		<Heading as="h3" size="l" align="center">
			{title}
		</Heading>
		<Text align="center">{children}</Text>
	</Stack>
);

Feature.propTypes = {
	as: PropTypes.string,
	imageComponent: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Feature;
