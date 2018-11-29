import React from 'react';
import { Box } from '@rebass/grid';
import Page from '../core/Page';
import Header from '../app/Header';
import Footer from '../app/Footer';
import Features from '../app/Features';
import DogFinder from '../app/DogFinderContainer';

const Layout = () => (
	<Page>
		<Box mb={5}>
			<Header />
		</Box>
		<Box p={4}>
			<Box mb={5}>
				<Features />
			</Box>
			<Box mb={5}>
				<DogFinder />
			</Box>
		</Box>
		<Page.Footer>
			<Footer />
		</Page.Footer>
	</Page>
);

export default Layout;
