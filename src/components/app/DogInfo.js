import React from 'react';
import PropTypes from 'prop-types';
import Stack from '../primitives/Stack';
import Heading from '../primitives/Heading';
import Text from '../primitives/Text';
import Rating from '../patterns/Rating';

const DogInfo = ({ isHeading, dog }) => (
	<Stack gridGap={2}>
		<Heading as={isHeading ? 'h3' : 'p'} size="md">
			{dog.name}
		</Heading>
		<Text variant="secondary">
			{dog.breed} from {dog.location}
		</Text>
		<Rating value={dog.rating} />
	</Stack>
);

DogInfo.propTypes = {
	isHeading: PropTypes.bool,
	dog: PropTypes.shape({
		name: PropTypes.string.isRequired,
		breed: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
	}),
};

export default DogInfo;
