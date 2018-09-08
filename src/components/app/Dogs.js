import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';
import Dog from './Dog';

const Dogs = ({ dogs }) => (
	<Stack gap={3} minWidth={200}>
		{dogs.map(dog => (
			<Dog key={dog.id} dog={dog} />
		))}
	</Stack>
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
