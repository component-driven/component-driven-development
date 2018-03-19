import React from 'react';
import { Flex, Box } from 'grid-styled';
import Card from './components/Card';
import DogPhoto from './components/DogPhoto';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Page from './components/Page';
import Slider from './components/Slider';
import SubscriptionForm from './components/SubscriptionFormContainer';
import Widget from './components/Widget';

const SliderColumn = ({ children }) => (
	<Box w={[1, 1 / 3]} px={2} py={[2, 0]}>
		{children}
	</Box>
);

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
				<Card mb={3}>
					<Flex mx={-2} my={[-2, 0]} flexWrap="wrap">
						<SliderColumn>
							<Widget label="Size">
								<Slider
									value={filters.size}
									onChange={x => onFilterUpdate('size', x)}
								/>
							</Widget>
						</SliderColumn>
						<SliderColumn>
							<Widget label="Energy">
								<Slider
									value={filters.energy}
									onChange={x => onFilterUpdate('energy', x)}
								/>
							</Widget>
						</SliderColumn>
						<SliderColumn>
							<Widget label="Barkness">
								<Slider
									value={filters.barkness}
									onChange={x => onFilterUpdate('barkness', x)}
								/>
							</Widget>
						</SliderColumn>
					</Flex>
				</Card>
				<Card>
					<Flex m={-2} flexWrap="wrap">
						{dogs.map(dog => (
							<Box key={dog.id} p={2}>
								<DogPhoto id={dog.id} breed={dog.name} />
							</Box>
						))}
					</Flex>
				</Card>
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
