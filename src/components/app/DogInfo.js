import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';
import Heading from '../core/Heading';
import Text from '../core/Text';
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
		image: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		breed: PropTypes.string.isRequired,
		info: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		size: PropTypes.number.isRequired,
		rating: PropTypes.number.isRequired,
	}),
};

export default DogInfo;
