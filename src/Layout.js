import React from 'react';
import { Box } from 'grid-styled';
import Card from './components/Card';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Page from './components/Page';
import DogFinder from './components/DogFinderContainer';
import SubscriptionForm from './components/SubscriptionFormContainer';

const Layout = ({ filters, dogs, onFilterUpdate }) => (
	<Page.Container>
		<Box p={3}>
			<Heading size="alpha" is="h1" mb={1}>
				Dog Finder{' '}
				<span role="img" aria-label="Dog">
					🐶
				</span>
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
