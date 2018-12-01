import React from 'react';
import Stack from 'stack-styled';
import { Box } from '@rebass/grid';
import Heading from '../core/Heading';
import Text from '../core/Text';
import Button from '../core/Button';
import Image from '../core/Image';
import Rating from '../core/Rating';
import Panel from '../core/Panel';

const DogCard = ({ dog, ...props }) => (
	<Panel>
		<Stack {...props} gap={4}>
			<Box m={-4}>
				<Image src={`images/${dog.image}`} alt={dog.name} />
			</Box>
			<Stack {...props} gap={2}>
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

export default DogCard;
