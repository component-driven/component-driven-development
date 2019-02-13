import React from 'react';
import differenceInDays from 'date-fns/difference_in_days';
import parse from 'date-fns/parse';
import { Flex, Box } from '@rebass/grid';
import Image from '../core/Image';
import Heading from '../core/Heading';
import Text from '../core/Text';
import DogInfo from '../app/DogInfo';

const getDays = (from, to) => {
	if (!from || !to) {
		return undefined;
	}

	const datefrom = parse(from);
	const dateto = parse(to);
	if (!datefrom || !dateto) {
		return undefined;
	}

	return differenceInDays(datefrom, dateto) + 1;
};

const OrderSummary = ({ dog, datefrom, dateto }) => {
	const days = getDays(dateto, datefrom);
	const summ = days && days * dog.price;
	return (
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
				{days && <Text>{days} days</Text>}
				<Box ml="auto">
					{summ && (
						<Heading as="p" size="l">
							€ {summ}
						</Heading>
					)}
				</Box>
			</Flex>
		</>
	);
};

export default OrderSummary;
