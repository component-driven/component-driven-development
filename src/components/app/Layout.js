import React from 'react';
import { Box } from '@rebass/grid';
import Heading from '../core/Heading';
import Page from '../core/Page';
import Header from '../app/Header';
import Footer from '../app/Footer';
import Features from '../app/Features';
import DogFinder from '../app/DogFinderContainer';

const Layout = () => (
	<Page>
		<Header />
		<Box px={4} py={5}>
			<Features />
		</Box>
		<Box px={4} py={5} bg="lighter">
			<Heading as="h2" size="xl" mb={4} align="center">
				Find the best fluffy coworker for you
			</Heading>
			<DogFinder />
		</Box>
		<Page.Footer>
			<Footer />
		</Page.Footer>
	</Page>
);

export default Layout;
