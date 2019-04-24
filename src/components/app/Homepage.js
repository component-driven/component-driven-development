import React from 'react';
import Box from '../core/Box';
import Heading from '../core/Heading';
import Header from '../app/Header';
import Footer from '../patterns/Footer';
import Hero from '../patterns/Hero';
import Features from '../app/Features';
import DogFinder from '../app/DogFinderContainer';
import { Inverted } from '../../ThemeProvider';

const Homepage = () => (
	<>
		<Inverted>
			<Hero
				backgroundImage="linear-gradient(to bottom, rgba(44,35,28,0.7), rgba(0,0,0,0)),
					url(images/drew-coffman-125736-unsplash.jpg)"
				backgroundPosition="bottom center"
				as="header"
				role="banner"
			>
				<Header />
				<Box py={[4, 5, 6, 7]}>
					<Heading as="p" level={2} size="xl" mb={5}>
						Good boys and girls to brighten your office
					</Heading>
				</Box>
			</Hero>
		</Inverted>
		<main role="main">
			<Box px={4} py={5}>
				<Features />
			</Box>
			<Box px={4} py={5} bg="grey.2">
				<Heading as="h2" size="l" mb={4} align="center">
					Find the best fluffy coworker for you
				</Heading>
				<DogFinder />
			</Box>
		</main>
		<Footer />
	</>
);

export default Homepage;
