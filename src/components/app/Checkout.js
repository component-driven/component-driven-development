import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Page from '../core/Page';
import Header from '../app/Header';
import Heading from '../core/Heading';
import CheckoutForm from '../app/CheckoutForm';
import OrderSummary from '../app/OrderSummary';
import { STATUSES } from '../../consts';

const Checkout = ({ status, dog }) => (
	<Page>
		<Box px={4} py={3}>
			<Header />
		</Box>
		<Box px={4} py={3}>
			<Heading level={1} mb={5}>
				{status === STATUSES.LOADING ? 'Loading…' : `Rent ${dog.name}`}
			</Heading>
			<Flex flexWrap="wrap" m={-4}>
				<Box width={[1, 2 / 3]} p={4}>
					<CheckoutForm disabled={status !== STATUSES.READY} />
				</Box>
				<Box width={[1, 1 / 3]} p={4}>
					<OrderSummary dog={dog} />
				</Box>
			</Flex>
		</Box>
	</Page>
);

export default Checkout;
