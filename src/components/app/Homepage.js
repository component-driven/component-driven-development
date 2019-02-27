import React from 'react';
import { Box } from '@rebass/grid';
import Heading from '../core/Heading';
import Page from '../core/Page';
import Header from '../app/Header';
import Footer from '../app/Footer';
import Hero from '../core/Hero';
import Features from '../app/Features';
import DogFinder from '../app/DogFinderContainer';
import { Inverted } from '../../ThemeProvider';

const Homepage = () => (
	<Page>
		<Inverted>
			<Hero
				backgroundImage="linear-gradient(to bottom, rgba(44,35,28,0.7), rgba(0,0,0,0)),
					url(images/drew-coffman-125736-unsplash.jpg)"
				backgroundPosition="bottom center"
				px={4}
				py={3}
				as="header"
				role="banner"
			>
				<Header />
				<Box py={[4, 5, 6, 7]}>
					<Heading as="p" level={2} size="xxxl" mb={5}>
						Good boys and girls to brighten your office
					</Heading>
				</Box>
			</Hero>
		</Inverted>
		<main role="main">
			<Box px={4} py={5}>
				<Features />
			</Box>
			<Box px={4} py={5} bg="lighter">
				<Heading as="h2" size="xl" mb={4} align="center">
					Find the best fluffy coworker for you
				</Heading>
				<DogFinder />
			</Box>
		</main>
		<Page.Footer>
			<Footer />
		</Page.Footer>
	</Page>
);

export default Homepage;
