/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Box } from 'grid-styled';
import Card from '../core/Panel';
import Heading from '../core/Heading';
import Page from '../core/Page';
import Footer from '../app/Footer';
import DogFinder from '../app/DogFinderContainer';
import SubscriptionForm from '../app/SubscriptionFormContainer';

const Layout = () => (
	<Page.Container>
		<Box p={3}>
			<Heading size="alpha" is="h1" mb={1}>
				Dog Finder <span aria-hidden="true">🐶</span>
			</Heading>
			<Box mb={4}>
				<DogFinder />
			</Box>
			<Box mb={4}>
				<Heading size="gamma" is="h2" mb={2}>
					Subscribe to our newsletter!
				</Heading>
				<Card>
					<SubscriptionForm />
				</Card>
			</Box>
		</Box>
		<Page.Footer>
			<Box px={3} py={2}>
				<Footer />
			</Box>
		</Page.Footer>
	</Page.Container>
);

export default Layout;
