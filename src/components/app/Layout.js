/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Box } from '@rebass/grid';
import Panel from '../core/Panel';
import Heading from '../core/Heading';
import Page from '../core/Page';
import Header from '../app/Header';
import Footer from '../app/Footer';
import DogFinder from '../app/DogFinderContainer';
import SubscriptionForm from '../app/SubscriptionFormContainer';

const Layout = () => (
	<Page>
		<Box mb={3}>
			<Header />
		</Box>
		<Box p={4}>
			<Box mb={5}>
				<DogFinder />
			</Box>
			<Box mb={5}>
				<Heading size="l" as="h2" mb={3}>
					Subscribe to our newsletter!
				</Heading>
				<Panel>
					<SubscriptionForm />
				</Panel>
			</Box>
		</Box>
		<Page.Footer>
			<Box px={4} py={3}>
				<Footer />
			</Box>
		</Page.Footer>
	</Page>
);

export default Layout;
