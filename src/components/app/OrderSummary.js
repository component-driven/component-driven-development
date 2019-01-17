import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Image from '../core/Image';
import Heading from '../core/Heading';
import Text from '../core/Text';
import DogInfo from '../app/DogInfo';

const OrderSummary = ({ dog }) => (
	<>
		<Heading size="l" as="h3" mb={4}>
			Order Summary
		</Heading>
		<Box mb={4}>
			<Image src={`/images/${dog.image}`} alt={dog.name} />
		</Box>
		<Box mb={4}>
			<DogInfo dog={dog} />
		</Box>
		<Flex>
			<Text variant="primary">X days</Text>
			<Box ml="auto">
				<Heading as="p" size="l">
					€ XXX
				</Heading>
			</Box>
		</Flex>
	</>
);

export default OrderSummary;
