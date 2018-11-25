import React from 'react';
import Stack from 'stack-styled';
import Heading from '../core/Heading';
import Text from '../core/Text';
import Button from '../core/Button';
import Image from '../core/Image';
import Rating from '../core/Rating';

const DogCard = ({ dog, ...props }) => (
	<Stack {...props} gap={4}>
		<Image src={`images/${dog.image}`} alt={dog.name} />
		<Stack {...props} gap={2}>
			<Heading as="h3" size="m">
				{dog.name}
			</Heading>
			<Text variant="secondary">
				{dog.breed} from {dog.location}
			</Text>
			<Rating value={dog.rating} />
		</Stack>
		<Button variant="primary">Rent {dog.name}</Button>
	</Stack>
);

export default DogCard;
