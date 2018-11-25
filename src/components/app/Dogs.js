import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';
import DogCard from './DogCard';

const Dogs = ({ dogs }) => (
	<Stack gridColumnGap={4} gridRowGap={5} minWidth={200} m={0} p={0} as="ul">
		{dogs.map(dog => (
			<DogCard key={dog.id} dog={dog} as="li" />
		))}
	</Stack>
);

Dogs.propTypes = {
	dogs: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			breed: PropTypes.string.isRequired,
			info: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			size: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};

export default Dogs;
