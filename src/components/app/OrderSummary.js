import React from 'react';
import differenceInDays from 'date-fns/difference_in_days';
import parse from 'date-fns/parse';
import Box from '../core/Box';
import Flex from '../core/Flex';
import Heading from '../core/Heading';
import Text from '../core/Text';
import DogInfo from '../app/DogInfo';
import Card from '../core/Card';
import Image from '../core/Image';
import { getUrl } from '../../urls';

const getDays = (from, to) => {
	if (!from || !to) {
		return undefined;
	}

	const dateFrom = parse(from);
	const dateTo = parse(to);
	if (!dateFrom || !dateTo) {
		return undefined;
	}

	return differenceInDays(dateFrom, dateTo) + 1;
};

const OrderSummary = ({ dog, dateFrom, dateTo }) => {
	const days = getDays(dateTo, dateFrom);
	const summ = days && days * dog.price;
	return (
		<>
			<Heading size="l" as="h3" mb={4}>
				Order Summary
			</Heading>
			<Card>
				<Card.Cover>
					<Image src={getUrl(`/images/${dog.image}`)} alt={dog.name} />
				</Card.Cover>
				<Card.Body>
					<Box mb={3}>
						<DogInfo dog={dog} />
					</Box>
					{summ ? (
						<Flex>
							{days && <Text>{days} days</Text>}
							<Box ml="auto">
								<Heading as="p" size="l">
									€ {summ}
								</Heading>
							</Box>
						</Flex>
					) : (
						<Text>Select dates to see the summ</Text>
					)}
				</Card.Body>
			</Card>
		</>
	);
};

export default OrderSummary;
