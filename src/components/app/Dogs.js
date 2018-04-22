import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import Dog from './Dog';

const Dogs = ({ dogs }) => (
	<Flex m={-2} flexWrap="wrap">
		{dogs.map(dog => (
			<Box key={dog.id} p={2}>
				<Dog {...dog} />
			</Box>
		))}
	</Flex>
);

Dogs.propTypes = {
	dogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
};

export default Dogs;
