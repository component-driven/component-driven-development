/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Box } from '@rebass/grid';
import Panel from '../core/Panel';
import Heading from '../core/Heading';
import Page from '../core/Page';
import Footer from '../app/Footer';
import DogFinder from '../app/DogFinderContainer';
import SubscriptionForm from '../app/SubscriptionFormContainer';

const Layout = () => (
	<Page>
		<Box p={3}>
			<Heading size="xxl" as="h1" mb={1}>
				Dog Finder <span aria-hidden="true">🐶</span>
			</Heading>
			<Box mb={4}>
				<DogFinder />
			</Box>
			<Box mb={4}>
				<Heading size="l" as="h2" mb={2}>
					Subscribe to our newsletter!
				</Heading>
				<Panel>
					<SubscriptionForm />
				</Panel>
			</Box>
		</Box>
		<Page.Footer>
			<Box px={3} py={2}>
				<Footer />
			</Box>
		</Page.Footer>
	</Page>
);

export default Layout;
