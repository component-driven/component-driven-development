import React from 'react';
import PropTypes from 'prop-types';
import Stack from 'stack-styled';
import { Box } from '@rebass/grid';
import Heading from '../core/Heading';
import Text from '../core/Text';
import Button from '../core/Button';
import Image from '../core/Image';
import Rating from '../core/Rating';
import Panel from '../core/Panel';

const DogCard = ({ as, dog, ...props }) => (
	<Panel as={as}>
		<Stack gap={4}>
			<Box mt={-4} ml={-4} mr={-4}>
				<Image src={`images/${dog.image}`} alt={dog.name} />
			</Box>
			<Stack gap={2}>
				<Heading as="h3" size="m">
					{dog.name}
				</Heading>
				<Text variant="secondary">
					{dog.breed} from {dog.location}
				</Text>
				<Rating value={dog.rating} />
			</Stack>
			<Box mt="auto">
				<Button variant="primary" fullWidth>
					Rent {dog.name}
				</Button>
			</Box>
		</Stack>
	</Panel>
);

DogCard.propTypes = {
	as: PropTypes.string,
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

export default DogCard;
