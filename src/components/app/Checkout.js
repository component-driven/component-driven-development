import React from 'react';
import { Formik } from 'formik';
import Header from '../app/Header';
import Box from '../core/Box';
import Flex from '../core/Flex';
import Heading from '../core/Heading';
import CheckoutForm from '../app/CheckoutForm';
import OrderSummary from '../app/OrderSummary';
import { STATUSES } from '../../consts';

const Checkout = ({ status, dog }) => (
	<Formik
		initialValues={{
			address: '',
			zip: '',
			country: '',
			city: '',
			dateFrom: '',
			dateTo: '',
			cardnumber: '',
			ccname: '',
			'cc-exp': '',
			cvc: '',
		}}
	>
		{({ values, handleChange, handleBlur }) => (
			<>
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
							{status === STATUSES.READY && (
								<OrderSummary dog={dog} {...values} />
							)}
						</Box>
					</Flex>
				</Box>
			</>
		)}
	</Formik>
);

export default Checkout;
